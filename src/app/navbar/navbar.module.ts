import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {NavbarComponent} from './navbar.component'
import {SearchComponent} from './search/search.component'

@NgModule({
    //composant dans le module, ici composants privés du module
    declarations: [NavbarComponent,SearchComponent],
    //dépendances du module
    imports: [FormsModule,CommonModule],
    //pas de boostrap car ce n'est plus le module racine, ici composant public
    exports: [NavbarComponent,SearchComponent]
})
export class NavbarModule {}