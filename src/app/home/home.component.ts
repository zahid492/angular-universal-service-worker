import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h3>{{ message }}</h3> <img src="https://cdn.selise.biz/slnetwork/assets/images/backgrounds/Login-bg.jpg" 
  alt="Smiley face" height="420" width="420">`
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor() {}

  ngOnInit() {
    this.message = 'Hello Chnage Home';
  }
}
