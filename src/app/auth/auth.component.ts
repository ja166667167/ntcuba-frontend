import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ntcuba-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Auth component');
  }
}
