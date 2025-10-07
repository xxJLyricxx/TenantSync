import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  title = 'Login Page';

  constructor(){
    this.title = "Login Page 2"
    console.log("This Title is : " + this.title)
  }
}
