import { Component, OnInit } from '@angular/core'
import {AppService} from '../../core/app.service'

@Component({
    //le selector correspond à la balise html perso
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'

})
export class NavbarComponent implements OnInit{
    title: string='Mon App de formation'
    name: string ='Anna'
    price: number =15
    nbSelected: number = 0
    lan: string = 'fr'
    version: string =''
    //appModel:AppService

    constructor(private appModel:AppService){
        //this.appModel=this.appModel
    }

    ngOnInit() {
       this.version = this.appModel.getVersion()
    }
    changeUsername(username:string) {
        console.log(username)
    }
}