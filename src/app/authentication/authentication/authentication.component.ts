import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  showLogin = false
  showRegister = false

  constructor() {
    // this.showLogin = false
    // this.showRegister = false
  }

  ngOnInit(): void {
  }

  login() {
    this.showLogin != this.showLogin
  }

  register() {
    this.showRegister != this.showRegister
  }

}
