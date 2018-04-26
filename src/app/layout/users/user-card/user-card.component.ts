import { Component, Input} from '@angular/core'

@Component({
    selector:'user-card',
    template:`
    <h3>{{user.name}}</h3>
    <p><span>{{user.email}}</span></p>
    `
})
export class UserCardComponent{
    @Input() user:any 
}