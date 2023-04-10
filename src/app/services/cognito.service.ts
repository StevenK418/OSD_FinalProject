import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Amplify, Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

export interface IUser {
  email: string;
  password: string;
  showPassword: boolean;
  code: string;
  name: string;
  address: string;
  picture: string;
  phone_number: string;
  status: string;
  department: string;
  nickname: string;
  preferred_username:string;
  gender:string;
}

@Injectable({
  providedIn: 'root',
})
export class CognitoService {

  private authenticationSubject: BehaviorSubject<any>;

  constructor(private userService:UserService) {
    Amplify.configure({
      Auth: environment.cognito,
    });

    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }
  
  public signUp(user: IUser): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
    });
  }

  public confirmSignUp(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }

  // public signIn(user: IUser): Promise<any> {
  //   return Auth.signIn(user.email, user.password)
  //   .then(() => {
  //     this.authenticationSubject.next(true);
  //   });
  // }

  public signIn(user: IUser): Promise<any> {
    this.getUser();
    return Auth.signIn(user.email, user.password)
    .then(() => {
      this.authenticationSubject.next(true);
      this.getUser()
      .then((user: any) => {
        // this is a custom attribute you setup on creating the user pool
        // if it contains the word admin - then this admin user has access
        // to profile, create entry and update/delete

        let usertype = user.attributes["custom:usertype"];
         if (usertype=="admin")
          this.userService.UserType="admin";
         else
          this.userService.UserType="user";
      });

    });
  }

    public signOut(): Promise<any> {
      return Auth.signOut()
      .then(() => {
        this.authenticationSubject.next(false);
      });
    }

    public isAuthenticated(): boolean {
      return this.authenticationSubject.value;
    }

  // public signOut(): Promise<any> {
  //   return Auth.signOut()
  //   .then(() => {
  //     this.authenticationSubject.next(false);
  //   });
  // }

  // public isAuthenticated(): Promise<boolean> {
  //   if (this.authenticationSubject.value) {
  //     return Promise.resolve(true);
  //   } else {
  //     return this.getUser()
  //     .then((user: any) => {
  //       if (user) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }).catch(() => {
  //       return false;
  //     });
  //   }
  // }

  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public updateUser(user: IUser): Promise<any> {
    return Auth.currentUserPoolUser()
    .then((cognitoUser: any) => {
      return Auth.updateUserAttributes(cognitoUser, user);
    });
  }

  public getMyUser():void 
  {
    Auth.currentAuthenticatedUser()
    .then((currentUser) => {
      console.log('The currentUser => ', currentUser);
    
      Auth.currentUserInfo()
        .then((res) => {
          console.log('Here are the current user info! =>', res);
        })
        .catch((err) => {
          console.log('Current user info failed to fetch', err);
        });
     
    })
    .catch((err) => {
      console.log("my error" + err);
    });
  }
}
