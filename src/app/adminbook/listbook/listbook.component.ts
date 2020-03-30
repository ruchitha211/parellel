import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {

  constructor(private router:Router,private nav:NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }
  add(){
    this.router.navigate(['registration']);
  }

}
