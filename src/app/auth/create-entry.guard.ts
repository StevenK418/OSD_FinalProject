import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


import { CognitoService } from '../services/cognito.service';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})


export class CreateEntryGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService){

  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   let isAuth=this.userService.isAdmin();
    if(isAuth) {
      return true;
    }
    return false;
  }
}
