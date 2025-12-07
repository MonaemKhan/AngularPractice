import { Injectable } from '@angular/core';
import { Session, SessionEnum } from '../../../Class/session';

@Injectable({
  providedIn: 'root',
})
export class SessionService {

  setSession(data: Session, isRemember: boolean) {
    sessionStorage.setItem(SessionEnum.userId, data.userId);
    sessionStorage.setItem(SessionEnum.userToken, data.userToken);
    sessionStorage.setItem(SessionEnum.isRemember, data.isRemember === true ? "1" : "0");
    if (isRemember) {
      localStorage.setItem(SessionEnum.userId, data.userId);
      localStorage.setItem(SessionEnum.userToken, data.userToken);
      localStorage.setItem(SessionEnum.isRemember, data.isRemember === true ? "1" : "0");
    }
  }

  UpdateSession(data: Session) {
    sessionStorage.setItem(SessionEnum.userId, data.userId);
    sessionStorage.setItem(SessionEnum.userToken, data.userToken);
    var rem = sessionStorage.getItem(SessionEnum.userToken) || "0";
    if (rem === "1") {
      localStorage.setItem(SessionEnum.userId, data.userId);
      localStorage.setItem(SessionEnum.userToken, data.userToken);
    }
  }

  RemoveSession() {
    sessionStorage.removeItem(SessionEnum.userId);
    sessionStorage.removeItem(SessionEnum.userToken);
    sessionStorage.removeItem(SessionEnum.isRemember);
    sessionStorage.clear();
    localStorage.removeItem(SessionEnum.userId);
    localStorage.removeItem(SessionEnum.userToken);
    localStorage.removeItem(SessionEnum.isRemember);
    localStorage.clear();
  }

  getSession(): Session {
    const sessionData: Session = {
      userId: sessionStorage.getItem(SessionEnum.userId) || sessionStorage.getItem(SessionEnum.userId) || '',
      userToken: sessionStorage.getItem(SessionEnum.userToken) || sessionStorage.getItem(SessionEnum.userId) || '',
      isRemember: sessionStorage.getItem(SessionEnum.isRemember) === "1" ? true : false || sessionStorage.getItem(SessionEnum.isRemember) === "1" ? true : false || false
    };

    return sessionData;
  }
}
