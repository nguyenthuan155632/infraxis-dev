import { Component, OnInit } from '@angular/core';
import { AppSettings } from './../../config/app.settings';

@Component({
  selector: 'app-infra',
  templateUrl: './infra.component.html',
  styleUrls: ['./infra.component.scss']
})
export class InfraComponent implements OnInit {

  innerHeight: number;
  innerWidth: number;
  topPosition: number;

  constructor() { 

    this.innerHeight = (window.innerHeight) - AppSettings.HEADER_HEIGHT;
    this.innerWidth = AppSettings.MENU_WIDTH;
    this.topPosition = AppSettings.HEADER_HEIGHT;
    if(window.innerWidth < 768) {
      this.innerHeight = (window.innerHeight - AppSettings.HEADER_HEIGHT) * 2;
    }

  }

  ngOnInit() {
  }

  onResize(event) {
    this.innerHeight = event.target.innerHeight - AppSettings.HEADER_HEIGHT;
    if(event.target.innerWidth < 768) {
      this.innerHeight = (event.target.innerHeight - AppSettings.HEADER_HEIGHT) * 2;
    }
  }

}
