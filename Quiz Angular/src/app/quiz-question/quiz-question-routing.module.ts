import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsetComponent } from './questionset/questionset.component';

const routes: Routes = [
  {
    path:'',
    component:QuestionsetComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizQuestionRoutingModule { }
