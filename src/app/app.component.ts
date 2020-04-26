import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { info } from './info'

// function userNameValidator(control: FormControl): { [s: string]: boolean } {
//   if (!control.value.match(/^a/)) {
//     return { invalidUser: true };
//   }
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  myForm2: FormGroup;
  information: info[];
  userName: AbstractControl;
  password: AbstractControl;
  userName2: AbstractControl;
  password2: AbstractControl;
  name$: Observable<string>;
  addInfo() {
    this.userName2 = this.myForm2.controls['userName2'];
    this.password2 = this.myForm2.controls['password2'];
    const obj = new info(this.userName2.value.trim(), this.password2.value.trim());
    console.log(obj);
    this.information.push(obj);
  }
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group(
      {
        'userName': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      }
    );
    this.myForm2 = this.fb.group(
      {
        'userName2': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        'password2': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
      }
    );
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
    this.userName2 = this.myForm2.controls['userName2'];
    this.password2 = this.myForm2.controls['password2'];
    this.name$ = this.userName.valueChanges;
    this.userName.valueChanges.subscribe(val => {
      console.log(val);
    });
  }
  ngOnInit(): void {
    this.information = [];
  }
  Submit(): boolean {
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
    const obj = new info(this.userName.value.trim(), this.password.value.trim());
    const pages = document.getElementsByClassName('page');
    var mark = false;
    this.information.forEach(element => {
      if (obj.toString === element.toString) {
        pages[1].className = 'page hide';
        pages[2].className = 'page hide';
        pages[3].className = 'page';
        pages[4].className = 'page hide';
        console.log('true');
        mark = true;
        return true;
      }
    });
    if (!mark) {
      pages[1].className = 'page hide';
      pages[2].className = 'page hide';
      pages[3].className = 'page hide';
      pages[4].className = 'page';
      console.log('false');
    }
    return false;
  }
}
