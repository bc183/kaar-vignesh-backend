import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';


const routes: Routes = [
  {path:"", redirectTo:"/", pathMatch:"full"},
  {path:"", component: HomeComponent},
  {path:"customer-dashboard", component: CustomerDashboardComponent},
  {path:"profile", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
