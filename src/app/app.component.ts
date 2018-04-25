import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //cf index.html
  //templateUrl: './app.component.html',
  template: `
  <app-navbar></app-navbar>
  <h1>App</h1>
  <userslist></userslist>
  `
})
export class AppComponent {
  title = 'app';
}
