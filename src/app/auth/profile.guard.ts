import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


import { CognitoService } from '../services/cognito.service';

@Injectable({
  providedIn: 'root'
})


export class ProfileGuard implements CanActivate {
  constructor(private router: Router, private cogService: CognitoService){

  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   let isAuth=this.cogService.isAuthenticated();
    if(isAuth) {
      return true;
    }
    return false;
  }
}
