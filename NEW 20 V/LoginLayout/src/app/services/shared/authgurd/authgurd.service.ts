import { Injectable } from '@angular/core';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthgurdService {

  constructor(
    private sessionService : SessionService
  ){}

  isAuthorized():boolean{
    const sessionData = this.sessionService.getSession();
    if(sessionData.userId.length > 0){
      return true;
    }
    return false;
  }
}
