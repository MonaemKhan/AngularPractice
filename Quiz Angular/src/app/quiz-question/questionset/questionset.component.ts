import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ServeService } from '../serve/serve.service';
import { Task } from 'src/app/task.model';

@Component({
  selector: 'app-questionset',
  templateUrl: './questionset.component.html',
  styleUrls: ['./questionset.component.css']
})
export class QuestionsetComponent implements OnInit {
  question: any = FormGroup;
  ques_add:number = 1;
  All_Question:any = [];
  RightAnswer:any[] = [];
  isEdit:boolean = false;
  index:number = -1;

  constructor(private fb: FormBuilder,private requstService:ServeService) { }

  ngOnInit(): void {
    this.question = this.fb.group({
      QuizId:[''],
      Question:['',Validators.required],
      Option1:['',Validators.required],
      Option2:['',Validators.required],
      Option3:['',Validators.required],
      Option4:['',Validators.required],
      Right_Answer:['',Validators.required],
      Mark:['',Validators.required],
    });
  }


  pushToRightAnswer(){
    console.log('click');
    this.RightAnswer = [];
    if(this.question.value.Option1 !== ''){
      this.RightAnswer.push(this.question.value.Option1);
    }
    if(this.question.value.Option2 !== ''){
      this.RightAnswer.push(this.question.value.Option2);
    }
    if(this.question.value.Option3 !== ''){
      this.RightAnswer.push(this.question.value.Option3);
    }
    if(this.question.value.Option4 !== ''){
      this.RightAnswer.push(this.question.value.Option4);
    }    
  }

  questionSubmit(){
    if(!this.question.invalid){
      // console.log(this.question.value);
      this.All_Question.push(this.question.value)
      console.log(this.All_Question);
      this.question.reset();
    }else{
      console.log(this.question.value);
      console.log("Invalid");
    }    
  }

  EditItem(data:any){
    this.question.patchValue(data);
    this.index = this.All_Question.indexOf(data);
    console.log(this.index);    
    this.isEdit = true;
  }

  saveEditData(){
    this.All_Question[this.index] = this.question.value;
    this.question.reset();
    this.isEdit = false;
  }

  PostData():void{
    if(this.All_Question.length === 0){
      console.log('ok');      
    }else{
      console.log(this.All_Question)
      this.requstService.postdata(this.All_Question).subscribe(
        (re)=>{
        console.log(re);
      });
      this.All_Question = [];
    }
  }
}
