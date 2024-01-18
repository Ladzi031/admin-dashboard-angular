import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  
  constructor(private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]], 
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  
   
}
 /*
   getUserNameControlForm() : AbstractControl {
    return this.loginForm.get('userName')!;
  }
  
  getPasswordControlForm() : AbstractControl {
    return this.loginForm.get('password')!;
  }
   */