import { Injectable } from '@angular/core';
import { SessionService } from '../shared/session/session.service';
import { Guid } from '../../Class/Guid';
import { Session } from '../../Class/session';

@Injectable({
  providedIn: 'root',
})
export class LoginServices {
  constructor(
    private sessionService : SessionService
  ){}

  async doLogin(userId:string,password:string,isRemember:boolean):Promise<string>{
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
