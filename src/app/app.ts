import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./components/home/home";
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
