import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  isLoginActive = false;
  isSignUpActive = false;

  toggleActive(section: 'login' | 'signup', event: MouseEvent) {
    event.stopPropagation();

    if (section === 'login') {
      this.isLoginActive = !this.isLoginActive;
    } else if (section === 'signup') {
      this.isSignUpActive = !this.isSignUpActive;
    }
  }

  @HostListener('document:click')
  deactivateBoth() {
    this.isLoginActive = false;
    this.isSignUpActive = false;
  }

}
