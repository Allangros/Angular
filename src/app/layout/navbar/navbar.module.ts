import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {NavbarComponent} from './navbar.component'
import {SearchComponent} from './search/search.component'
import { PlurialPipe} from '../../shared/pipes/plurial.pipes'
import { StartNamePipe } from '../../shared/pipes/startname.pipes'
import {AppRouter} from '../../app.router'


@NgModule({
    //composant dans le module, ici composants privés du module
    declarations: [
        NavbarComponent,
        SearchComponent,
        PlurialPipe,
        StartNamePipe
    ],
    //dépendances du module
    imports: [
        FormsModule,
        CommonModule,
        AppRouter,
        ReactiveFormsModule
    ],
    //pas de boostrap car ce n'est plus le module racine, ici composant public
    exports: [NavbarComponent,SearchComponent]
})
export class NavbarModule {}