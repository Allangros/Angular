import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {UsersComponent} from './users.component'
import {UserCardComponent} from './user-card/user-card.component'
import {MatListModule} from '@angular/material'
import {MailPipe} from '../shared/pipes/mail.pipes'

@NgModule({
    //composant dans le module, ici composants privés du module
    declarations: [UsersComponent,UserCardComponent,MailPipe],
    //dépendances du module
    imports: [MatListModule,CommonModule,FormsModule],
    //pas de boostrap car ce n'est plus le module racine, ici composant public
    exports: [UsersComponent]
})
export class UsersModule {}