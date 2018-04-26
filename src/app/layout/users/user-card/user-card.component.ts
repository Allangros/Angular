import { Component, Input, Output, EventEmitter} from '@angular/core'
import {UserService} from '../../../core/users.service'

@Component({
    selector:'user-card',
    template:`
    <h3>{{user.name}}</h3>
    <p><span>{{user.email}}</span></p>
    <select [(ngModel)] = "lan">
        <option>fr</option>
        <option>eng</option>
    </select>
    <button (click)=deleteUser()>{{'REMOVE' | local:lan}}</button>
    `
})
export class UserCardComponent{
    @Input() user:any 
    @Output() onDeleteUser: EventEmitter<void> = new EventEmitter()
    lan: string = 'fr'

    constructor(private userModel:UserService){}

    deleteUser() {
        this.userModel
        .delete(this.user.id)
        .subscribe(() => {
            this.onDeleteUser.emit()
        })
    }
}