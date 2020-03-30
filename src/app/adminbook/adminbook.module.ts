import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListbookComponent } from './listbook/listbook.component';
import { AddbookComponent } from './addbook/addbook.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [ListbookComponent, AddbookComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminbookModule { }
