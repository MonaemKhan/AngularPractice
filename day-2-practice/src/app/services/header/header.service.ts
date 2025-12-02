import { Injectable } from '@angular/core';
import { routerData } from '../../Class/routeDetails';

@Injectable({ providedIn: 'root' })

export class HeaderService {
    routedata:routerData[] = [
    {
      path : "",
      name : "Home"
    },
    {
      path: "/about",
      name: "About"
    },
    {
      path: "#",
      name: "Todo"
    },
    {
      path: "#",
      name: "Contract"
    }
  ];
  getrouteData(){
    return this.routedata;
  }
}
