import { Injectable } from '@angular/core';
import { routerData } from '../../Class/routeDetails';

export class HeaderService {
    static routedata:routerData[] = [
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
  static getrouteData(){
    return this.routedata;
  }
}
