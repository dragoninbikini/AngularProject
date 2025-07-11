import { Component, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { FormControl } from '@angular/forms';
import { NgFor } from '@angular/common';
 import { HostListener } from '@angular/core';
import { Header } from "../header/header";
import { Login } from "../login/login";
import { Signup } from "../signup/signup";
@Component({
  selector: 'app-home',
  imports: [MatFormFieldModule, MatInputModule, Header, Login, Signup],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 isTitlesActive = false;
  isNotesActive = false;

  toggleActive(section: 'titles' | 'notes', event: MouseEvent) {
    event.stopPropagation();

    if (section === 'titles') {
      this.isTitlesActive = !this.isTitlesActive;
    } else if (section === 'notes') {
      this.isNotesActive = !this.isNotesActive;
    }
  }

  @HostListener('document:click')
  deactivateBoth() {
    this.isTitlesActive = false;
    this.isNotesActive = false;
  }
}
