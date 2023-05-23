import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalTimerService {
  public timer: Observable<void>;

  constructor() {
    this.timer = new Observable<void>(observer => {
      const timeout = setTimeout(() => {
        observer.next();
      }, 10000);
      return {
        unsubscribe(): void {
          clearTimeout(timeout);
        }
      }
    });
  }
}
