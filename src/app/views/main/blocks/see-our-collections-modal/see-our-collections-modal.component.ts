import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {delay, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-see-our-collections-modal',
  templateUrl: './see-our-collections-modal.component.html',
  styleUrls: ['./see-our-collections-modal.component.scss']
})
export class SeeOurCollectionsModalComponent implements OnInit, OnDestroy {
  public isModalVisible: boolean = false;
  private timerSubscription: Subscription | null = null;
  private timer$: Observable<void> = new Observable<void>(observer => observer.next());

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.timerSubscription = this.timer$.pipe(delay(10000)).subscribe((): void => {
      this.showModal();
    });
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }

  public showModal(): void {
    this.isModalVisible = true;
  }

  public hideModal(): void {
    this.isModalVisible = false;
  }

  public goToCatalog(): void {
    this.router.navigate(['/catalog']);
  }
}
