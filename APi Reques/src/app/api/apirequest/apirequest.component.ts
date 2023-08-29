import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve/serve.service';
import { tap } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-apirequest',
  templateUrl: './apirequest.component.html',
  styleUrls: ['./apirequest.component.css']
})
export class ApirequestComponent implements OnInit {
  getdata: any[] = [];
  isLoading: boolean = false;
  postdata: any = FormGroup;

  constructor(private requestservice: ServeService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.requestservice.getdata()
      .pipe(
        tap(() => {
          this.isLoading = true;
        }),
      ).subscribe((result) => {
        // console.log(result);
        this.getdata = result;
      });

    this.postdata = this.fb.group({
      userId: [''],
      id: [''],
      title: [''],
      body: ['']
    });

    
  }

  datasubmit(){
    console.log(this.postdata.value);
    // this.requestservice.postdata(this.postdata.value).subscribe((result)=>{
    //   console.log(result);
    //   this.getdata.push(result)
    // });
  }
  getinfo(data:any){
    console.log('clicked');
    this.postdata.patchValue(data);
  }

  putdata(){
    console.log(this.postdata.value);
    this.requestservice.putdata(this.postdata.value).subscribe((re)=>{
      console.log(re);
    })
  }

  deletedata(){
    console.log(this.postdata.value);
    this.requestservice.deletedata(this.postdata.value.id).subscribe((re)=>{
      console.log(re);      
    })
  }
}
