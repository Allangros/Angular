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
    <button (onConfirm)=deleteUser() confirm="Etes-vous sûr ?" [confirmUsername]="user.name">{{'REMOVE' | local:lan}}</button>
    <button [routerLink]="['user', user.id]">Modifier</button>
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