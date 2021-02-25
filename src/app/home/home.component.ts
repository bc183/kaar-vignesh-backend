import { LoginFormComponent } from './../login-form/login-form.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(type: string) {
    this.dialog.open(LoginFormComponent, {
      data: {
        type: type
      }
    });
  }

}
