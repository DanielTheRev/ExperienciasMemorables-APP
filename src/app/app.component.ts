import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class AppComponent implements AfterViewInit {
  // @ViewChild('body') body!: ElementRef<HTMLBodyElement>;
  theme: string = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'ligth';
  ngAfterViewInit(): void {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (ev) => {
        this.theme = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'ligth';
      });
  }
}
