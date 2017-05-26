import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.css']
})
export class EthereumComponent implements OnInit {

  infra: string = null;

  constructor() { 

    this.infra = 'ethereum';
  
  }

  ngOnInit() {
  }

}
