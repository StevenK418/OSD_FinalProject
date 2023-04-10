import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { CognitoService } from '../services/cognito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(private router: Router, private cognitoService: CognitoService) 
  {
    this.isAuthenticated = false;
  }

  public ngOnInit(): void {
    // this.cognitoService.isAuthenticated()
    // .then((success: boolean) => {
    //   this.isAuthenticated = success;
    // });
  }

  public signOut(): void {
    this.cognitoService.signOut()
    .then(() => {
      this.router.navigate(['/signIn']);
    });
  }
}
