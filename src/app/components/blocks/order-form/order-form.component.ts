import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  public orderForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('/^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/im')]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required, Validators.pattern('^\\d{5}(?:[-\\s]\\d{4})?$')]],
    address: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9\\s,\'-]*$'), Validators.minLength(10)]],
    teaItem: [{value: '', disabled: true}, [Validators.required]],
    comment: [''],
  });
  constructor(
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
}
