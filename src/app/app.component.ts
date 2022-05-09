import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shop-ui';
  isSignedIn = false;

  salary1 = 123.45678;
  salary2 = 1234.567;
  salary3 = 12.3;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.isSignedIn = this.authService.isUserSignedIn();
  }
}
