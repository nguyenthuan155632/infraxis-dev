import { Component, OnInit, Input } from '@angular/core';
import { AppSettings } from './../../../config/app.settings';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() infra: string;

  innerHeight: number;
  innerWidth: number;
  topPosition: number;
  leftPosition: number;
  isHide: boolean = true;
  type: string = '';

  isChart: boolean = false;

  constructor() { 

    this.innerHeight = (window.innerHeight) - AppSettings.HEADER_HEIGHT;
    this.innerWidth = (window.innerWidth) - AppSettings.MENU_WIDTH;
    this.topPosition = AppSettings.HEADER_HEIGHT;
    this.leftPosition = AppSettings.MENU_WIDTH;
    // console.log(window.innerWidth);
    // console.log(this.innerWidth);

  }

  ngOnInit() {
  }

  onResize(event) {
    this.innerHeight = event.target.innerHeight - AppSettings.HEADER_HEIGHT;
    this.innerWidth = event.target.innerWidth - AppSettings.MENU_WIDTH;
    // console.log(event.target.innerWidth);
    // console.log(window.innerWidth);
  }

  onMaximize(noteType: Event) {
    this.isHide = false;
    this.type = noteType.toString();
  }

  onMinimize() {
    this.isHide = true;
  }

}
