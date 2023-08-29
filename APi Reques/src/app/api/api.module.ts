import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { ApirequestComponent } from './apirequest/apirequest.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ServeService } from './serve/serve.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ApirequestComponent
  ],
  imports: [
    CommonModule,
    ApiRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ServeService
  ]
})
export class ApiModule { }
