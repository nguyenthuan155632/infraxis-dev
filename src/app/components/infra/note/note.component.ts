import { Component, OnInit } from '@angular/core';
import { AppSettings } from './../../../config/app.settings';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  innerHeight: number;
  innerWidth: number;
  isMaximize: boolean = true;
  topPosition: number;
  leftPosition: number;

  constructor() { 

    this.innerHeight = (window.innerHeight) - AppSettings.HEADER_HEIGHT;
    this.innerWidth = (window.innerWidth) - AppSettings.MENU_WIDTH;
    this.topPosition = AppSettings.HEADER_HEIGHT;
    this.leftPosition = AppSettings.MENU_WIDTH;

  }

  ngOnInit() {
    console.log(this.innerHeight);
  }

  onResize(event) {
    if(this.isMaximize) {
      this.innerHeight = event.target.innerHeight - AppSettings.HEADER_HEIGHT;
      this.innerWidth = event.target.innerWidth - AppSettings.MENU_WIDTH;
    }
  }

  windowMinimize() {
    this.innerWidth = Math.round(this.innerWidth / 2);
    this.isMaximize = false;
  }

  windowMaximize() {
    this.innerWidth = (window.innerWidth) - AppSettings.MENU_WIDTH;
    this.isMaximize = true;
  }

}
