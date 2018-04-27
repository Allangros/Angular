import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {LoginModule} from './login/login.module'
import {AppRouter} from './app.router'
import {LayoutModule} from './layout/layout.module'
import {AppService} from './core/app.service'
import {UserService} from './core/users.service'
import {HttpClientModule} from '@angular/common/http'
import {LayoutRouter} from './layout/layout.router'

@NgModule({
    //composant dans le module
    declarations: [AppComponent],
    //dépendances du module
    imports: [
        BrowserModule, 
        LoginModule,
        AppRouter,
        LayoutModule,
        HttpClientModule,
        LayoutRouter
    ],
    //sur quel composant démarrer
    bootstrap: [AppComponent],
    providers: [AppService,UserService]
})
export class AppModule {
}