import { Routes } from '@angular/router';
import { Authgurd } from './services/shared/authgurd/authgurd';
import { Mainlayout } from './layout/mainlayout/mainlayout';

export const routes: Routes = [
  {
    path:"",
    component:Mainlayout,
    canActivate:[Authgurd],
    children:[
      {
        path:"",
        loadComponent: ()=> {return import('./component/home/home').then((m)=>m.Home)}
      },
      {
        path:"about",
        loadComponent: ()=>{return import('./component/about/about').then((m)=>m.About)}
      }
    ]
  },
  {
    path:"error",
    pathMatch:"full",
    loadComponent: ()=>{return import('./component/error/error').then((m)=>m.Error)},
  },
  {
    path: "**",
    loadComponent: () =>
      import('./component/error/error').then((m) => m.Error)
  }
];
