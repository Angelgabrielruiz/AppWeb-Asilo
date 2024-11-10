import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from './servicios/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    private location: Location,
    public authService: AuthService
  ) {}

  title = 'AppWebRecu';
  goBack() {
    this.location.back(); 
  }
}
