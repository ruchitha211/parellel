import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginGroup;
  error;

  constructor(private builder:FormBuilder, private router: Router,private nav:NavbarService) { }

  ngOnInit() {
   this.nav.show();

    this.loginGroup=this.builder.group({
      email:['',[Validators.required]],
      password: ['',[Validators.required]],
    })
  }
  sub()
  {
    let userstring=localStorage.getItem(this.loginGroup.value.email);
    if(userstring != null)
    {
      let userobj=JSON.parse(userstring);
      console.log(userobj.email===this.loginGroup.value.email && userobj.password=== this.loginGroup.value.password);
      if(userobj.email===this.loginGroup.value.email && userobj.password=== this.loginGroup.value.password)
      {
        sessionStorage.setItem('user',userobj.email);
        this.router.navigate(['adminhome']);
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

// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import {Router} from "@angular/router";

// import { ApiService } from 'src/app/api.service';

// @Component({
//   selector: 'app-adminlogin',
//   templateUrl: './adminlogin.component.html',
//   styleUrls: ['./adminlogin.component.css']
// })
// export class AdminloginComponent implements OnInit {

//   loginForm: FormGroup;
//   invalidLogin: boolean = false;
//   constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

//   onSubmit() {
//     if (this.loginForm.invalid) {
//       return;
//     }
//     const loginPayload = {
//       username: this.loginForm.controls.username.value,
//       password: this.loginForm.controls.password.value
//     }
//     this.apiService.login(loginPayload).subscribe(data => {
//       debugger;
//       if(data.status === 200) {
//         window.localStorage.setItem('token', data.result.token);
//         this.router.navigate(['list-user']);
//       }else {
//         this.invalidLogin = true;
//         alert(data.message);
//       }
//     });
//   }

//   ngOnInit() {
//     window.localStorage.removeItem('token');
//     this.loginForm = this.formBuilder.group({
//       username: ['', Validators.compose([Validators.required])],
//       password: ['', Validators.required]
//     });
//   }



// }