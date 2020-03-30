import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { RegisterComponent } from './user/register/register.component';
import { RegistrationComponent } from './admin/registration/registration.component';
import { Home1Component } from './home/home1/home1.component';
import { HomeModule } from './home/home.module';

import { AbouttComponent } from './about/aboutt/aboutt.component';
import { AboutModule } from './about/about.module';
import { AdminuserModule } from './adminuser/adminuser.module';
import { AdminbookModule } from './adminbook/adminbook.module';
import { ListbookComponent } from './adminbook/listbook/listbook.component';
import { AddbookComponent } from './admin/addbook/addbook.component';


const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'listbook',component:ListbookComponent},
  {path:'addbook',component:AddbookComponent},
  
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'aboutt',component:AbouttComponent},
  {path:'**',component:Home1Component}
 
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AdminModule,
UserModule,
HomeModule,
AdminuserModule,
AboutModule,
AdminbookModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }


