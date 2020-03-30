import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private nav:NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }
}
