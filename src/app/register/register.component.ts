import { Component, OnInit, Input, Output } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { info } from '../info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myForm: FormGroup;
  @Output() information: info[];
  userName: AbstractControl;
  password: AbstractControl;
  addInfo() {
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
    const obj = new info('aaa', 'aaaaa');
    this.information.push(new info('aaa', 'aaaaa'));
    return false;
  }
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group(
      {
        'userName': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
      }
    );
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
    this.userName.valueChanges.subscribe(val => {
      console.log(val);
    });
  }
}
