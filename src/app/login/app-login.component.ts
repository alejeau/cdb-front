import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {

  message: string;
  username: string;
  password: string;
  error: boolean;
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  setMessage(msg) {
    this.message = msg;
  }

  ngOnInit() {
    this.setDefaultMessage();
    this.createForm();
  }

  setDefaultMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn() ? 'in' : 'out');
  }


  createForm() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['', Validators.required]
    });
  }

  login() {
    this.username = this.loginForm.get('username').value;
    this.password = this.loginForm.get('password').value;
    this.router.navigate([this.authService.redirectUrl]);
    this.message = 'Trying to log in ...';
    this.authService.login(this.username, this.password).subscribe(
      ((token: string) => {
        this.setDefaultMessage();
        console.log('Token received : ' + token);
        localStorage.setItem('token', token);
        console.log('Storing token in local Storage');
        console.log(localStorage.getItem('token'));
        if (this.authService.redirectUrl.endsWith('logout') || this.authService.redirectUrl.endsWith('login')) {
          this.authService.redirectUrl = '';
        }
        this.router.navigate([this.authService.redirectUrl]);
        this.error = false;
        this.authService.getRole().subscribe(
          (role_str: string) => {
            localStorage.setItem('role', role_str);
            });

      }),
      (error) => {
        this.message = 'Wrong username/password';
        this.error = true;
      });
  }






}
