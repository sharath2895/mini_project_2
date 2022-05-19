import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  showLogin = false
  showRegister = false

  login() {
    this.showLogin != this.showLogin
  }

  register() {
    this.showRegister != this.showRegister
  }
}
