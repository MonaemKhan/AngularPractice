import { routeOutlate } from './../../Class/routeDetails';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor(
    private route : Router
  ){}
  isSlideOpen: boolean = false;
  sidebarstate = new BehaviorSubject({
    show: false
  });

  isSlideRightOpen: boolean = false;
  sidebarRightstate = new BehaviorSubject({
    show: false
  });

  routeTitleState = new BehaviorSubject({
    Route_title : ""
  });

  routeOutlateData: routeOutlate[] = [
    {
      name: 'Admin',
      routes: [{
        path: "",
        name: "Home",
        title: ""
      },
      {
        path: "/about",
        name: "About",
        title: "About Section"
      }
      ]
    },
    {
      name: 'Others',
      routes: [{
        path: "",
        name: "Todo",
        title: "Todo Section"
      },
      {
        path: "",
        name: "Service",
        title: "Service Section"
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

  async actionRight() :Promise<boolean>{
    if (!this.isSlideRightOpen) {
      this.sidebarRightstate.next({
        show: true
      });
    } else {
      this.sidebarRightstate.next({
        show: false
      });
    }

    this.isSlideRightOpen = !this.isSlideRightOpen;
    return true;
  }

  statusRight(): boolean {
    return this.isSlideRightOpen;
  }

  getRouteOutlateData():routeOutlate[]{
    return this.routeOutlateData;
  }

  gotoRoute(value:string){
    this.routeOutlateData.forEach(element => {
      element.routes.forEach(el=>{
        if(el.path === value){
          this.routeTitleState.next({
            Route_title : el.title
          });
        }
      });
    });
    this.route.navigate([value]);
  }
}
