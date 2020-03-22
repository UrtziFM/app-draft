import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() email: string = '';
  @Input() password: string = '';
  // userEmail: string;
  // userPassword: string;
  @Output() formHandler = new EventEmitter<any>();

  SignIn: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router) {
      this.mainSignIn();
     }

  ngOnInit() {

  }
  mainSignIn() {
    this.SignIn = this.formBuilder.group({
      email: [this.email],
      password: [this.password]
    });
  }

  login() {
    this.authService.validate(this.email, this.password)
    .then((response) => {
      this.authService.setUserInfo({'user' : response['user']});
      this.router.navigate(['Forms']);

    });
  }
}
