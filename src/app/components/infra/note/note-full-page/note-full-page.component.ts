import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-full-page',
  templateUrl: './note-full-page.component.html',
  styleUrls: ['./note-full-page.component.scss']
})
export class NoteFullPageComponent implements OnInit {

  @Output() minimize = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  windowMinimize() {
    this.minimize.emit();
  }

}
