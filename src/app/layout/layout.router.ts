import { Routes, RouterModule } from "@angular/router";
import {LayoutComponent} from './layout.component'
import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes:Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: UsersComponent
            },
            {
                path:'user/:id',
                component: UserProfileComponent
            }
        ]
    }
]
export const LayoutRouter = RouterModule.forChild(routes)