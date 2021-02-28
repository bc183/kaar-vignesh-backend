import { SidenavComponent } from './sidenav/sidenav.component';
import { Component } from '@angular/core';
import { Router,NavigationEnd, NavigationStart  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vignesh-kaar';
  isHome: boolean;
  constructor(private router: Router) {
    this.router.events.pipe(
      filter((val) => val instanceof NavigationStart)).subscribe((val:any) => {
        this.isHome = val.url === '/'
  });
    console.log(this.isHome);
  }
}
