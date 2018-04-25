import { Component } from '@angular/core';

@Component({
    //le selector correspond à la balise html perso
    selector: 'app-navbar',
    template: `
    <p>{{title | uppercase}}</p> 
    <p>{{ price | currency:'EUR'}}
    <app-search [username]="name" (onSearch)="changeUsername($event)"></app-search>
    `
})
export class NavbarComponent {
    title: string='Mon App de formation'
    name: string ='Anna'
    price: number =15
    changeUsername(username:string) {
        console.log(username)
    }
}