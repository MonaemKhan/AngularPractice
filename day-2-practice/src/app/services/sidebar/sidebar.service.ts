import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isSlideOpen: boolean = false;
  sidebarstate = new BehaviorSubject({
    show: false
  });

  action() {
    if (!this.isSlideOpen) {
      this.sidebarstate.next({
        show: true
      });
    }else{
      this.sidebarstate.next({
        show: false
      });
    }

    this.isSlideOpen = !this.isSlideOpen;
  }
}
