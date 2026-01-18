import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router) {}

  goNext() {
    this.router.navigate(['/next-page']); // Replace '/next-page' with the actual route you want to navigate to
  }
}
