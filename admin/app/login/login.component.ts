import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserApi } from './../../../sdk/services/custom/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Forms: FormGroup;
  loginStatus: boolean = true;
  constructor(
    private fb: FormBuilder,
    private user: UserApi
  ) { }

  saveForm() {
    if(this.Forms.valid === true) {
      
       this.user.login({ email: this.Forms.value.email, password: this.Forms.value.password}, 'User', true)
       .subscribe(response => {
          // return to home page
       },
       error => {
          this.loginStatus = false
       }
       );
    }
  }
  ngOnInit() {
    this.Forms = this.fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required],
      'remember_me': ['']
    });
  }

}
