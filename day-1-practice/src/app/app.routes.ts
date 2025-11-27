import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    loadComponent: ()=> {return import('./component/home/home').then((m)=>m.Home)},
  },
  {
    path:"about",
    pathMatch:'full',
    loadComponent: ()=>{return import('./component/about/about').then((m)=>m.About)},
  }
];
