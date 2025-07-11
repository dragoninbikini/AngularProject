import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit{
     fullText = 'Hello, welcome to my website! 👋';
  displayedText = '';
  index = 0;

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    if (this.index < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), 100); // typing speed in ms
    }
  }
}
