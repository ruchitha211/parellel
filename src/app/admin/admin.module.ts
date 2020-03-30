import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddbookComponent } from './addbook/addbook.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AdminloginComponent, AdminhomeComponent, RegistrationComponent, AddbookComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ]
})
export class AdminModule { }
