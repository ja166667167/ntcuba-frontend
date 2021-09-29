import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ntcuba-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Records component');
  }
}
