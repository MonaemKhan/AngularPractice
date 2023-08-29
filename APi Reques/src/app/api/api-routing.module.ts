import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApirequestComponent } from './apirequest/apirequest.component';

const routes: Routes = [
  {
    path:'',
    component:ApirequestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRoutingModule { }
