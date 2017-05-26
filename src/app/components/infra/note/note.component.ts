import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { AppSettings } from './../../../config/app.settings';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() noteType: string;
  @Output() maximize = new EventEmitter<string>();

  constructor(private el: ElementRef) { 
  }

  ngOnInit() {
  }

  onResize(event) {
  }

  windowMaximize() {
    this.maximize.emit(this.noteType);
  }

}
