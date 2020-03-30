import { Component, OnInit } from '@angular/core';
import { AdminnavService } from 'src/app/adminnav.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public nav1:AdminnavService) { }

  ngOnInit() {
    this.nav1.show();
  }
}
