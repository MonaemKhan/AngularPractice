import { Routes } from '@angular/router';
import { Authgurd } from './services/shared/authgurd/authgurd';

export const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    loadComponent: ()=> {return import('./component/home/home').then((m)=>m.Home)},
    canActivate:[Authgurd]
  },
  {
    path:"about",
    pathMatch:'full',
    loadComponent: ()=>{return import('./component/about/about').then((m)=>m.About)},
    canActivate:[Authgurd]
  },
  {
    path:"error",
    pathMatch:"full",
    loadComponent: ()=>{return import('./component/error/error').then((m)=>m.Error)},
  }
];
