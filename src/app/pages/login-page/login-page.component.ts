import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @Output() login = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  askLogin() {
    this.login.emit('');
  }

}
