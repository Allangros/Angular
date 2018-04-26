import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/users.service'


@Component({
    //le selector correspond à la balise html perso
    selector: 'userslist',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit{
    extSelected: string ="me"
    ext: string[] = ['tv', 'biz', 'io', 'me']
    users: any

    constructor(private userModel:UserService){}

    ngOnInit(){
      this.users = this.userModel.fetch()
    }
}