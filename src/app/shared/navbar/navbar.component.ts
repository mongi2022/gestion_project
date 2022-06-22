import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   show=false
   
   constructor() { }

  ngOnInit(): void {
    this.show=true
  }

 
showAside(){

 this.show = !this.show;
 
}
  
 
}
