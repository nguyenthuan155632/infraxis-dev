import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  @Input() infra: string;

  constructor() { }

  ngOnInit() {
  }

  onResize(event) {

  }

}
