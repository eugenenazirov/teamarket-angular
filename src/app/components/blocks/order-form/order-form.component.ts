import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TeaItemService} from "../../../services/tea-item.service";
import {OrderFormDataType} from "../../../types/order-form-data.type";
import {finalize, Subscription, tap} from "rxjs";
import {ErrorTimerService} from "../../../services/error-timer.service";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit, OnDestroy {
  public formSubmitted: boolean = false;
  public successfulResponse: boolean = false;
  public loading: boolean = false;
  private timerSubscription: Subscription | null = null;

  public orderForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('^[а-яА-Яa-zA-Z\\s]*$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[а-яА-Яa-zA-Z\\s]*$')]],
    phone: ['', [Validators.required, Validators.pattern('^(\\+)?\\d{11}$')]],
    country: ['', [Validators.required, Validators.pattern('^[а-яА-Яa-zA-Z\\s]*$')]],
    zip: ['', [Validators.required, Validators.pattern('^\\d{5,6}(?:\\-\\d+)?$')]],
    address: ['', [Validators.required, Validators.pattern('^[а-яА-Яa-zA-Z0-9\\s,\'\,\.\/-]*$'), Validators.minLength(10)]],
    teaItem: [{value: '', disabled: true}, [Validators.required]],
    comment: [''],
  });

  constructor(
    private teaItemService: TeaItemService,
    private errorTimerService: ErrorTimerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    const itemTitle = this.activatedRoute.snapshot.queryParams['item'];

    if (itemTitle) {
      this.orderForm.patchValue({teaItem: itemTitle});
    } else {
      this.router.navigate(['/catalog']);
    }
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }

  public get firstName() {
    return this.orderForm.get('firstName');
  }

  public get lastName() {
    return this.orderForm.get('lastName');
  }

  public get phone() {
    return this.orderForm.get('phone');
  }

  public get country() {
    return this.orderForm.get('country');
  }

  public get zip() {
    return this.orderForm.get('zip');
  }

  public get address() {
    return this.orderForm.get('address');
  }

  public get teaItem() {
    return this.orderForm.get('teaItem');
  }

  public get comment() {
    return this.orderForm.get('comment');
  }

  public formValid(): boolean {
    return this.orderForm.valid;
  }

  public prepareFormData(): OrderFormDataType {
    return {
      name: this.firstName?.value,
      last_name: this.lastName?.value,
      phone: this.phone?.value,
      country: this.country?.value,
      zip: this.zip?.value,
      product: this.teaItem?.value,
      address: this.address?.value,
      comment: this.comment?.value,
    }
  }

  public onSubmit(): void {
    if (!this.formValid()) {
      this.orderForm.markAllAsTouched();
      return;
    }

    const formData: OrderFormDataType = this.prepareFormData();
    this.sendFormData(formData);
    this.subscribeOnTimer();
  }

  private sendFormData(formData: OrderFormDataType) {
    this.loading = true;

    this.teaItemService.orderTeaItem(formData)
      .pipe(
        tap(() => {
          this.formSubmitted = true;
        }),
        finalize(() => {
          this.loading = false;
        }),
      )
      .subscribe({
        next: (response) => {
          this.successfulResponse = response.success === 1;
        },
        error: (error) => {
          this.formSubmitted = true;
          this.successfulResponse = false;
          console.error(error);
        },
      });
  }

  private subscribeOnTimer() {
    this.timerSubscription = this.errorTimerService.timer$
      .subscribe({
        next: () => {
          if (!this.successfulResponse) {
            this.formSubmitted = false;
            this.successfulResponse = true;
          }
        }
      });
  }
}
