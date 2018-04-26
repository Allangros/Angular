import {Component} from '@angular/core'

@Component({
    selector: 'app-layout',
    template: `
        <app-navbar></app-navbar>
        <userslist></userslist>
    `
})
export class LayoutComponent {}