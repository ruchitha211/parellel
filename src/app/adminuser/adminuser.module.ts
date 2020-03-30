import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser/adduser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { EdituserComponent } from './edituser/edituser.component';



@NgModule({
  declarations: [AdduserComponent, ListuserComponent, EdituserComponent],
  imports: [
    CommonModule
  ]
})
export class AdminuserModule { }
