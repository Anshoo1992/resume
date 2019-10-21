import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  toogle: any = false;
  constructor() {
  }
  showNav() {
    this.toogle = this.toogle ? false : true;
  }
}
