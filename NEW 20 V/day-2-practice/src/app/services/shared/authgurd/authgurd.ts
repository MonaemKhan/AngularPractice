import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthgurdService } from './authgurd.service';

@Injectable({
  providedIn: 'root',
})
export class Authgurd implements CanActivate {
  constructor(private AuthgurdService: AuthgurdService, private router: Router) { }

  canActivate(): boolean {
    if (!this.AuthgurdService.isAuthorized()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
