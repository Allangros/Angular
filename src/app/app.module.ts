import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {NavbarModule} from './navbar/navbar.module'
import { UsersModule } from './users/users.module'
import {LoginModule} from './login/login.module'
import {AppRouter} from './app.router'

@NgModule({
    //composant dans le module
    declarations: [AppComponent],
    //dépendances du module
    imports: [
        BrowserModule, 
        NavbarModule, 
        UsersModule,
        LoginModule,
        AppRouter
    ],
    //sur quel composant démarrer
    bootstrap: [AppComponent]
})
export class AppModule {
}