import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
import { Task } from '../../task.model';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
  url = 'https://localhost:7275/api/QuizQuestion';
  constructor(private http:HttpClient) { }

  postdata(task:any):Observable<any>{
    console.log('task :'+JSON.stringify(task));
    
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(`https://localhost:7275/api/QuizQuestion`,JSON.stringify(task),httpOptions)
  }
}
