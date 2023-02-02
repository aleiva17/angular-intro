import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginFrm: FormGroup;

  constructor() {
    const emailRegex = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
    const controlsFrm = {
      email: new FormControl("", [Validators.required, Validators.pattern(emailRegex)]),
      password: new FormControl("", [Validators.required, Validators.maxLength(25)]),
      rememberMe: new FormControl(false)
    };
    this.loginFrm = new FormGroup(controlsFrm);
  }

  login() {
    alert(`Welcome back ${ this.loginFrm.controls["email"].value }`);
    this.reset();
  }

  controlHasAnError(controlId: string): boolean {
    return this.loginFrm.controls[controlId].invalid && (this.loginFrm.controls[controlId].touched || this.loginFrm.controls[controlId].dirty);
  }

  reset() {
    this.loginFrm.controls["email"].setValue("");
    this.loginFrm.controls["password"].setValue("");
    this.loginFrm.controls["rememberMe"].setValue(false);
  }
}
