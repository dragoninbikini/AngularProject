import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-homepage',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage implements OnInit{
   faCoffee = faCoffee;
   faArrowright = faArrowRight;
   faArrowDown = faArrowDown;
   faPen = faPen;
   faBook = faBook;  
   faTableColumns = faTableColumns;
   faHeartPulse = faHeartPulse;


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
