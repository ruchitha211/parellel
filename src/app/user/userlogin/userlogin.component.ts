import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private nav:NavbarService,private builder:FormBuilder, private router: Router) { }
  reg():void{
    this.router.navigate(['register']);
  }
  loginGroup;
  error;
  ngOnInit() {
    this.nav.show();
    this.loginGroup=this.builder.group({
      email:['',[Validators.required]],
      password: ['',[Validators.required]],
    })
  }
  submit()
{
  let userstring=localStorage.getItem(this.loginGroup.value.email);
  if(userstring != null)
  {
    let userobj=JSON.parse(userstring);
    console.log(userobj.email===this.loginGroup.value.email && userobj.password=== this.loginGroup.value.password);
    if(userobj.email===this.loginGroup.value.email && userobj.password=== this.loginGroup.value.password)
    {
      sessionStorage.setItem('user',userobj.email);
      this.router.navigate(['/userhome']);
    }
    else
    {
      this.error=true;
    }
  }
  else
  {
    this.error=true;
  }
  }
  
}
