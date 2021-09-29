import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ntcuba-team-manage',
  templateUrl: './team-manage.component.html',
  styleUrls: ['./team-manage.component.scss'],
})
export class TeamManageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('TeamManage Component');
  }
}
