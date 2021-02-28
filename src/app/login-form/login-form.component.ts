import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  username: string = "";
  password: string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialogRef<LoginFormComponent>, public router: Router, private snackBar: MatSnackBar, private service: LoginService) { }
  

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
      // this.service.login(this.username, this.password).subscribe((res) => {
      //   localStorage.setItem('user', res.data);
      //   this.dialog.close();
      //   this.router.navigate(['/customer-dashboard']);
      //   this.snackBar.open("Login Successfull!", null, {
      //     duration: 2000,
      //     verticalPosition: "top"
      //   });
      // });
    }
    if (this.data.type === "Vendor") {
      // TODO do Vendor login
    }
    this.dialog.close();
    this.router.navigate(['/customer-dashboard']);
    this.snackBar.open("Login Successfull!", null, {
      duration: 2000,
      verticalPosition: "top"
    });
  }
}
