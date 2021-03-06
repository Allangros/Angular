import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {UsersComponent} from './users.component'
import {UserCardComponent} from './user-card/user-card.component'
import {MatListModule} from '@angular/material'
import {MailPipe} from '../../shared/pipes/mail.pipes'
import {UserService} from '../../core/users.service'
import { LocalPipe } from '../../shared/pipes/local.pipes'
import {LayoutRouter} from '../layout.router'
import {ConfirmDirective} from '../../shared/directives/confirm.Directives'

@NgModule({
    //composant dans le module, ici composants privés du module
    declarations: [
        UsersComponent,
        UserCardComponent,
        MailPipe,
        LocalPipe,
        ConfirmDirective
    ],
    //dépendances du module
    imports: [
        MatListModule,
        CommonModule,
        FormsModule,
        LayoutRouter
    ],
    //pas de boostrap car ce n'est plus le module racine, ici composant public
    exports: [UsersComponent],
    providers :[UserService]
})
export class UsersModule {}