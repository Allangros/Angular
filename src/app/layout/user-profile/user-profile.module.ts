import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [UserProfileComponent]
})
export class UserProfileModule { }
