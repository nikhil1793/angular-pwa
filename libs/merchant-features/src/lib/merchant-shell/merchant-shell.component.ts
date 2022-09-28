import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-merchant-shell',
  templateUrl: './merchant-shell.component.html',
  styleUrls: ['./merchant-shell.component.css'],
})
export class MerchantShellComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder) {
   
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {}
}
