import { Component, EventEmitter, Output } from '@angular/core';
import { Header } from "../header/header";
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [Header, FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
    isLogin = false;
    inputEmail = '';
    inputPasswd = '';

  @Output() email = new EventEmitter<string>();
  @Output() passwd = new EventEmitter<string>();

  constructor(private router: Router) {}

  onLogin(email: string, passwd: string) {
    this.email.emit(this.inputEmail);
    this.passwd.emit(this.inputPasswd);

    
    if (this.inputEmail === 'admin' && this.inputPasswd === 'admin') {
      this.isLogin = true;
      this.router.navigate(['/homepage'])
    } else {
      console.error('Please try again');
    }

    if (this.isLogin) {
      ;
    } else {
      console.log('false');
    }
  }
}

