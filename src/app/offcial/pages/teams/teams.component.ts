import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ntcuba-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Teams component');
  }
}
