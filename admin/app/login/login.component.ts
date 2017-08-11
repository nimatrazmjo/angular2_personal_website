import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private user: UserApi,
    private router: Router
  ) { }

  saveForm() {
    if(this.Forms.valid === true) {
      
       this.user.login({ email: this.Forms.value.email, password: this.Forms.value.password}, 'User', true)
       .subscribe(response => {
          console.log('success response');
          this.router.navigate(['/home']);
       },
       error => {
         console.log('Failed response');
         this.loginStatus = false;
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
