import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  addEmployeeRequest:Employee = {
    id:'00000000-0000-0000-0000-000000000000',
    name:'',
    email:'',
    phone:'',
    salary: 0,
    department:''
  };

  constructor(private route: Router,private employeeService : EmployeeService) { }
  
  ngOnInit(): void {

  }

  AddEmployee(){
    // console.log(this.addEmployeeRequest)
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe(
      {
        next: (emp)=>{
          console.log(emp);
          this.route.navigate(['employees'])
        },
        error: (re)=>{
          console.log(re);          
        }
      }
    );
  }
}
