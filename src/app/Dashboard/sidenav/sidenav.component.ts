import { navbarData } from './nav-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  collapsed=false;
  navData=navbarData;


  toggleCollapse():void{
    this.collapsed=this.collapsed;
  }

  closeSidenav():void{
    this.collapsed=false;
  }
}
