"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.LoginFormComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(data, dialog, router, snackBar) {
        this.data = data;
        this.dialog = dialog;
        this.router = router;
        this.snackBar = snackBar;
        this.username = "";
        this.password = "";
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.onSubmit = function () {
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
        this.router.navigate(['/customer-dashboard']);
        this.snackBar.open("Login Successfull!", null, {
            duration: 2000,
            verticalPosition: "top"
        });
    };
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: 'app-login-form',
            templateUrl: './login-form.component.html',
            styleUrls: ['./login-form.component.scss']
        }),
        __param(0, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
