import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onNavigation(addr: string[]) {
    this.route.navigate(addr);
  }

}
