import { Component } from '@angular/core';

@Component({
    //le selector correspond à la balise html perso
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
    title: string='Mon App de formation'
    name: string ='Anna'
    price: number =15
    nbSelected: number = 0
    lan: string = 'fr'
    changeUsername(username:string) {
        console.log(username)
    }
}