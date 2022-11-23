import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pages } from './models/navigation/pages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  public Home(): void { this.router.navigateByUrl(Pages.Home); }
  public Services(): void { this.router.navigateByUrl(Pages.Services); }
  public Projects(): void { this.router.navigateByUrl(Pages.Projects); }
  public Contact(): void { this.router.navigateByUrl(Pages.Contact); }
  public About(): void { this.router.navigateByUrl(Pages.About); }
}
