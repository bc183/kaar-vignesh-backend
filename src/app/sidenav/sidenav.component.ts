import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isHome: boolean;
  currentRoute: string;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
