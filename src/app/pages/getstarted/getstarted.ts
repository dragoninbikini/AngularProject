import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faA } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faB } from '@fortawesome/free-solid-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { faD } from '@fortawesome/free-solid-svg-icons';
import { faE } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-getstarted',
  imports: [Header, CommonModule, FaIconComponent],
  templateUrl: './getstarted.html',
  styleUrl: './getstarted.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Getstarted {
    faCheck = faCheck;

  options = [
    { letter: 'A', label: 'Logo*' },
    { letter: 'B', label: 'Brand Identity' },
    { letter: 'C', label: 'Website Design & Dev' },
    { letter: 'D', label: 'Social Media Designs' },
    { letter: 'E', label: 'Other' }
  ];

  selectedIndex: number | null = null;

  selectOption(index: number): void {
    this.selectedIndex = index;
  }

        steps = ['01', '02', '03', '04'];
        currentStep = 1; // Change this to highlight different steps
}
