import {Routes, RouterModule, Router} from '@angular/router'
import {UsersComponent} from './users/users.component'
import {LoginComponent} from './login/login.component'


const routes:any = [
    {
        path:'',
        component: UsersComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]

export const AppRouter = RouterModule.forRoot(routes)