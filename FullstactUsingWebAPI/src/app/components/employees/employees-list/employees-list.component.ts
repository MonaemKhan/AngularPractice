import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employee: Employee[] = [
    {
      id: '123',
      name: 'Jone-Don',
      email: 'jon-don@gmail.com',
      phone: '015',
      salary: 80000,
      department: 'Accounts'
    },
    {
      id: '124',
      name: 'Alice',
      email: 'Alice@gmail.com',
      phone: '017',
      salary: 50000,
      department: 'Sales'
    },
    {
      id: '134',
      name: 'Boob',
      email: 'Boob@gmail.com',
      phone: '018',
      salary: 70000,
      department: 'HR'
    }
  ];

  constructor(private EmployeeServices:EmployeeService) { }

  ngOnInit(): void {
    this.EmployeeServices.getAllEmployee().subscribe(
      {
        next: (emp)=>{
          console.log(emp);
          this.employee = emp;
        },
        error: (re)=>{
          console.log(re);
        }
      }
    );
  }
}
