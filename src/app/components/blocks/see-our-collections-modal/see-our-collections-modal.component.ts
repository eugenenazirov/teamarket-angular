import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ModalTimerService} from "../../../services/modal-timer.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-see-our-collections-modal',
  templateUrl: './see-our-collections-modal.component.html',
  styleUrls: ['./see-our-collections-modal.component.scss']
})
export class SeeOurCollectionsModalComponent implements OnInit, OnDestroy {
  public isModalVisible: boolean = false;
  private timerSubscription: Subscription | null = null;
  constructor(
    private router: Router,
    private timerService: ModalTimerService
  ) {
  }

  ngOnInit(): void {
    this.timerService.timer.subscribe((): void => {
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
