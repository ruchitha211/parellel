import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserloginComponent, UserhomeComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
