import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';
import { Routes, Router } from '@angular/router';
import { AdminnavService } from 'src/app/adminnav.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

   constructor(private router:Router,public nav:NavbarService,public nav1:AdminnavService) { }


  ngOnInit() {
    this.nav.hide();
    this.nav1.show();
    
    
  }
  addbook(){
    this.router.navigate(['listbook']);
  }
 
}

