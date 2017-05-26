import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  infra: string = null;

  constructor() { 

    this.infra = 'bitcoin';

  }

  ngOnInit() {
  }

}
