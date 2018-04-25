import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {NavbarModule} from './navbar/navbar.module'
import { UsersModule } from './users/users.module';

@NgModule({
    //composant dans le module
    declarations: [AppComponent],
    //dépendances du module
    imports: [BrowserModule, NavbarModule, UsersModule],
    //sur quel composant démarrer
    bootstrap: [AppComponent]
})
export class AppModule {
}