import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { CognitoService } from './services/cognito.service';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CA2-AngularClient';
  currentYear = new Date().getFullYear(); 
  

  //isAuthenticated: boolean;

  constructor(private router: Router, private cognitoService: CognitoService, public userService:UserService) 
  {
    //this.isAuthenticated = false;
  }

  public ngOnInit(): void {
    // this.cognitoService.isAuthenticated()
    // .then((success: boolean) => {
    //   this.isAuthenticated = success;
    // });
  }

  public isAdmin():boolean {
    return this.userService.isAdmin();
  }


  public isAuthenticated(): boolean {
    return this.cognitoService.isAuthenticated();
  }

  public signOut(): void {
    this.cognitoService.signOut()
    .then(() => {
      this.router.navigate(['/signIn']);
    });
  }

}
