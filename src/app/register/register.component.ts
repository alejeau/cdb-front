import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegisterService} from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  username: string;
  password: string;
  message: string;
  error: boolean;


  constructor(private registerService: RegisterService, private router: Router, private fb: FormBuilder) {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    this.username = this.registerForm.get('username').value;
    this.password = this.registerForm.get('password').value;
    this.registerService.register(this.username, this.password).subscribe(
      ((message: string) =>  {this.error = false; this.message = message; } ),
      ((error: any) => {this.error = true; this.message = 'Username already taken'; } ));


  }

}






