import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ntcuba-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  UserName = '';
  Password1 = '';
  Password2 = '';
  Allcheck() {
    if (this.checkUser() && this.checkPassword()) {
      return true;
    } else {
      if (!this.checkUser()) {
        alert('Wrong User Name Format!!');
      }
      return false;
    }
  }
  checkUser() {
    if (this.UserName.length < 6) {
      return false;
    } else {
      return true;
    }
  }
  checkPasswordLength() {
    if (this.Password1.length < 6) {
      return false;
    } else {
      return true;
    }
  }
  checkSecPassword() {
    if (this.Password1 == this.Password2) {
      return true;
    }
    return false;
  }
  checkPassword() {
    if (this.checkPasswordLength() && this.checkSecPassword()) {
      return true;
    } else {
      if (!this.checkPasswordLength()) {
        alert('Wrong Password Format');
      }
      if (!this.checkSecPassword()) {
        alert('Two Passwords are not Identical');
      }
      return false;
    }
  }
}
