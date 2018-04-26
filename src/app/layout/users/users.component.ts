import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/users.service'


@Component({
    //le selector correspond à la balise html perso
    selector: 'userslist',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit{
    extSelected: string ="me"
    ext: string[] = ['tv', 'biz', 'io', 'me', 'net']
    users: any = []

    constructor(private userModel:UserService){}

    ngOnInit(){
      this.userModel.fetch().then((users) => {
          this.users = users
      })
    }

    createUser(){
        this.userModel.create({
            email: 'test@test.net'
        }).subscribe((userCreated) => {
            this.users.push(userCreated)
        })
    }

    removeUser(id: number){
        const index = this.users.findIndex(user => user.id == id)
        this.users[index].delete
    }
}