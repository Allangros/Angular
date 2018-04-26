import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {LoginModule} from './login/login.module'
import {AppRouter} from './app.router'
import {LayoutModule} from './layout/layout.module'

@NgModule({
    //composant dans le module
    declarations: [AppComponent],
    //dépendances du module
    imports: [
        BrowserModule, 
        LoginModule,
        AppRouter,
        LayoutModule
    ],
    //sur quel composant démarrer
    bootstrap: [AppComponent]
})
export class AppModule {
}