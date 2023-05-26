import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()
export class ErrorTimerService {
  timer$: Observable<void>;

  constructor() {
    this.timer$ = new Observable((observer): void => {
      setTimeout(() => {
        observer.next();
      }, 3000);
    });
  }
}
