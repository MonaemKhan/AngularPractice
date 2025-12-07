import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  LoadingState = new BehaviorSubject({
    show: false,
  });

  open() {
    console.log('connection open');
    this.LoadingState.next({
      show: true,
    });
  }

  close() {
    console.log('connection close');
    this.LoadingState.next({
      ...this.LoadingState.value,
      show: false
    });
  }
}
