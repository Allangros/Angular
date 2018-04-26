import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NavbarModule} from './navbar/navbar.module'
import {UsersModule} from './users/users.module'
import {LayoutComponent} from './layout.component'

@NgModule({
    declarations: [
        LayoutComponent
    ],
    //dépendances du module
    imports: [
        CommonModule,
        NavbarModule,
        UsersModule
    ],
})
export class LayoutModule{}