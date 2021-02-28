import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  readOnly: boolean = true;
  firstName: string = "barath";
  lastName: string = "Chinmala";
  city: string = "Chennai";
  address: string = "Perambur";
  telephone: number = 8072967998;
  region: string = "south";
  country: string = "India";
  postalCode : string = "Post";

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  toggleEdit() {
    this.readOnly = false;
    this.snackBar.open("Start editing the details", null, {
      duration: 1000,
      verticalPosition: "top"
    });
  }

  saveDetails() {
   console.log(this.firstName);
   this.readOnly = true;
   this.snackBar.open("Profile Updated", null, {
    duration: 3000,
    verticalPosition: "top"
  });
  }

}
