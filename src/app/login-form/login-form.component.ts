import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  username: string = "";
  password: string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialogRef<LoginFormComponent>) { }
  

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.username);
    // console.log(this.password);
    if (this.data.type === "Employee") {
      // TODO do employee login
    }
    if (this.data.type === "Customer") {
      // TODO do Customer login
    }
    if (this.data.type === "Vendor") {
      // TODO do Vendor login
    }
    this.dialog.close();
  }

}
