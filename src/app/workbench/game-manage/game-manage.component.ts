import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ntcuba-game-manage',
  templateUrl: './game-manage.component.html',
  styleUrls: ['./game-manage.component.scss'],
})
export class GameManageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('GameManage Component');
  }
}
