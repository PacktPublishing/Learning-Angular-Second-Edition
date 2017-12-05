import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <div>
      <a routerLink="/home" routerLinkActive="active">Home</a>
    </div>
    <div>
      <a routerLink="/tasks" routerLinkActive="active">Tasks</a>
    </div>
    <div>
      <a routerLink="/timer" routerLinkActive="active">Timer</a>
    </div>
    <div class="main">
      <router-outlet> </router-outlet>
    </div>
    <div>
      <a routerLink="/products" routerLinkActive="active">Products</a>
    </div>
    <div>
      <button (click)="navigate()">Navigate to timer programatically</button>
    </div>
    <div>
      <router-outlet name="popup"></router-outlet>
    </div>
    <div>
      <button (click)="openPopup()">open popup</button>
    </div>
    <div>
      <button (click)="closePopup()">close popup</button>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(['/timer']);
  }

  openPopup() {
    this.router.navigate([{ outlets: { popup: 'info' } }]);
  }

  closePopup() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }

}
