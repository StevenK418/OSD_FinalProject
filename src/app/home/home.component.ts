import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated$ = this.authService.isAuthenticated$
  user$ = this.authService.user$;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    this.authService.loginWithRedirect({appState: { target: '/cars',}})
  }
  handleSignUp() {
    this.authService.loginWithRedirect({screen_hint:"signup"})
  }
}
