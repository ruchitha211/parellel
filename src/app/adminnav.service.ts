import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminnavService {
  visible1: boolean;
  constructor()  {  this.visible1 = false; }

  hide() { this.visible1 = false; }

  show() { this.visible1 = true; }

  toggle() { this.visible1 = !this.visible1; }
}
