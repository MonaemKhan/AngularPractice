import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseApiUrl:string = 'https://localhost:7014';
  constructor(private http:HttpClient) { }

  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl+'/api/Employee')
  }
  addEmployee(addEmployeeRequest:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl+'/api/Employee',addEmployeeRequest);
  }
  getEmployee(id:string):Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl+'/api/Employee/id:Guid?id='+id);
  }
  UpdateEmployee(id:string,EmployeInfoUpdate:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl+'/api/Employee/id:Guid?id='+id,EmployeInfoUpdate);
  }
  DeleteEmployee(id:string):Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl+'/api/Employee/id:Guid?id='+id);
  }
}
