import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myName = 'Chris Nunciato';
  currentTime: string;

  constructor() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleString();
    }, 1000);
  }
}
