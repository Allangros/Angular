import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //cf index.html
  //templateUrl: './app.component.html',
  template: `
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app';
}
