import { Injectable } from '@angular/core';
import { SessionService } from '../shared/session/session.service';
import { Guid } from '../../Class/Guid';
import { Session } from '../../Class/session';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginServices {
  constructor(
    private sessionService : SessionService,
    private http : HttpClient
  ){}

  async doLogin(userId:string,password:string,isRemember:boolean):Promise<string>{
    this.http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe(data=>{
      console.log(data);
    });
    if(userId !== "admin"){
      return "User Not Found";
    }else if(password !== "1"){
      return "Wrong Password";
    }
    const sessionData: Session = {
          userId: userId,
          userToken: Guid.newGuid(),
          isRemember: isRemember
        };
    this.sessionService.setSession(sessionData);
    return "";
  }
}
