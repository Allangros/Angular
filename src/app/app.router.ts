import {Routes, RouterModule, Router} from '@angular/router'
import {LayoutComponent} from './layout/layout.component'
import {LoginComponent} from './login/login.component'


const routes:any = [
    {
        path:'',
        component: LayoutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]

export const AppRouter = RouterModule.forRoot(routes)