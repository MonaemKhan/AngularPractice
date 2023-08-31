import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizQuestionRoutingModule } from './quiz-question-routing.module';
import { QuestionsetComponent } from './questionset/questionset.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {ServeService} from './serve/serve.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    QuestionsetComponent
  ],
  imports: [
    CommonModule,
    QuizQuestionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    ServeService,
  ]
})
export class QuizQuestionModule { }
