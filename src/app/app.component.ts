import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CA2-AngularClient';
  currentYear = new Date().getFullYear(); 

  isAuthenticated$ = this.authService.isAuthenticated$
  user$ = this.authService.user$;
  constructor(private router: Router, public authService: AuthService) 
  {

  }

  handleLogout() 
  {
    this.authService.logout()
  }
  
  handleLogin() {
    this.authService.loginWithRedirect({appState: { target: '/cars',}})
  }
  handleSignUp() {
    this.authService.loginWithRedirect({screen_hint:"signup"})
  }
}
