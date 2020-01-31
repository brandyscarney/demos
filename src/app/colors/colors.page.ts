import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: 'colors.page.html',
  styleUrls: ['colors.page.scss']
})
export class ColorsPage implements OnInit {
  colors = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'];

  constructor() {

  }

  ngOnInit() {

  }

  getColorBase(colorBlock: Element): string {
    const color = window.getComputedStyle(colorBlock).getPropertyValue('--ion-color-base');
    return color;
  }

}
