"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var customer_dashboard_component_1 = require("./customer-dashboard/customer-dashboard.component");
var sidenav_component_1 = require("./sidenav/sidenav.component");
var animations_1 = require("@angular/platform-browser/animations");
var flex_layout_1 = require("@angular/flex-layout");
var forms_1 = require("@angular/forms");
// material
var toolbar_1 = require("@angular/material/toolbar");
var card_1 = require("@angular/material/card");
var dialog_1 = require("@angular/material/dialog");
var login_form_component_1 = require("./login-form/login-form.component");
var input_1 = require("@angular/material/input");
var button_1 = require("@angular/material/button");
var form_field_1 = require("@angular/material/form-field");
var sidenav_1 = require("@angular/material/sidenav");
var icon_1 = require("@angular/material/icon");
var tooltip_1 = require("@angular/material/tooltip");
var snack_bar_1 = require("@angular/material/snack-bar");
var profile_component_1 = require("./profile/profile.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_form_component_1.LoginFormComponent,
                sidenav_component_1.SidenavComponent,
                customer_dashboard_component_1.CustomerDashboardComponent,
                profile_component_1.ProfileComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                toolbar_1.MatToolbarModule,
                card_1.MatCardModule,
                flex_layout_1.FlexLayoutModule,
                dialog_1.MatDialogModule,
                forms_1.FormsModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                form_field_1.MatFormFieldModule,
                sidenav_1.MatSidenavModule,
                icon_1.MatIconModule,
                tooltip_1.MatTooltipModule,
                snack_bar_1.MatSnackBarModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
