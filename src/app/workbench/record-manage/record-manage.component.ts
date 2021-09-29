import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ntcuba-record-manage',
  templateUrl: './record-manage.component.html',
  styleUrls: ['./record-manage.component.scss'],
})
export class RecordManageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('RecordManage Component');
  }
}
