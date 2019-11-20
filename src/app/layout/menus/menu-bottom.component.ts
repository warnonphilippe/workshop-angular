import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-menu-bottom',
    templateUrl: './menu-bottom.component.html'
})
export class MenuBottomComponent implements OnInit {

  version = 0;

  constructor() {}

  ngOnInit() {
    this.version = environment.version;
  }

}
