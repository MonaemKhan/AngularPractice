import { routeOutlate } from './../../Class/routeDetails';
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

  routeOutlateData: routeOutlate[] = [
    {
      name: 'Admin',
      routes: [{
        path: "",
        name: "Home"
      },
      {
        path: "/about",
        name: "About"
      }
      ]
    },
    {
      name: 'Others',
      routes: [{
        path: "#",
        name: "Todo"
      },
      {
        path: "#",
        name: "Service"
      }
      ]
    }
  ]

  async action() :Promise<boolean>{
    if (!this.isSlideOpen) {
      this.sidebarstate.next({
        show: true
      });
    } else {
      this.sidebarstate.next({
        show: false
      });
    }

    this.isSlideOpen = !this.isSlideOpen;
    return true;
  }

  status(): boolean {
    return this.isSlideOpen;
  }

  getRouteOutlateData():routeOutlate[]{
    return this.routeOutlateData;
  }
}
