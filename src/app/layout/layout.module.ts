import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NavbarModule} from './navbar/navbar.module'
import {UsersModule} from './users/users.module'
import {LayoutComponent} from './layout.component'
import {UserProfileModule} from './user-profile/user-profile.module'
import {LayoutRouter} from './layout.router'

@NgModule({
    declarations: [
        LayoutComponent
    ],
    //dépendances du module
    imports: [
        CommonModule,
        NavbarModule,
        UsersModule,
        UserProfileModule,
        LayoutRouter
    ],
})
export class LayoutModule{}