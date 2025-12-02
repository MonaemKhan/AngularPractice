import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthgurdService {

  isAuthorized():boolean{
    return true;
  }
}
