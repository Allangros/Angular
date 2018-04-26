import {NgModule} from '@angular/core'
import {LoginComponent} from './login.component'
import {ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

@NgModule({
        //composant dans le module, ici composants privés du module
        declarations: [LoginComponent],
        //dépendances du module
        imports: [
                CommonModule, 
                ReactiveFormsModule
        ]
})
export class LoginModule {}