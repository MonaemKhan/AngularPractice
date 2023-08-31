import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: '',
    salary: 0,
    department: ''
  }
  constructor(private _route:Router,private route: ActivatedRoute, private _EmployeeService: EmployeeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
        next: (params) => {
          const id = params.get('id');
          console.log(id)
          if (id) {
            console.log('in')
            this._EmployeeService.getEmployee(id).subscribe(
              {
                next: (re) => {
                  console.log(re);
                  this.employeeDetails = re;
                },
                error: (re) => {
                  console.log('error :')
                  console.log(re);
                }
              }
            );
          }
        },
        error: (er)=>{
          console.log(er);
        }
      }
    );
  }

  UpdateEmployee(){
    this._EmployeeService.UpdateEmployee(this.employeeDetails.id,this.employeeDetails).subscribe(
      {
        next: (re)=>{
          this._route.navigate(['employees'])
        },
        error: (er)=>{
          console.log(er);          
        }
      }
    );
  }

  DeleteEmployee(id:any){
    this._EmployeeService.DeleteEmployee(id).subscribe(
      {
        next: (re)=>{
          this._route.navigate(['employees'])
        }
      }
    );
  }
}
