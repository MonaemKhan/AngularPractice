import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http : HttpClient) { }
  
  getdata():Observable<any>{
    return this.http.get(this.url);
  }

  postdata(data:any):Observable<any>{
    return this.http.post(this.url,data);
  }

  putdata(data:any):Observable<any>{
    return this.http.put(this.url+'/'+data.id,data);
  }

  deletedata(id:number):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}
