import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
 fname:string = '';
 lname:string = '';
 fullname:string = '';
 isShow:boolean = false;

 data:any;
 OnSubmit(){
  this.fullname = this.fname+" "+this.lname;
  this.isShow = true;
 }

 AddtoParent(d:any){
  this.data = d;
 }
}
