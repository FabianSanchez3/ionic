import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {
  onRegisterForm!: FormGroup;
  dayTime!: String;
  hora = new Date().getHours();
  [x: string]: any;

  constructor(
    private formBuilder: FormBuilder
    ) { 
      this['setImage']();
    }

 ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'nombre': [null, Validators.compose([
        Validators.required
      ])],
      'lastname': [null, Validators.compose([
        Validators.required
      ])],
      'user': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

}
