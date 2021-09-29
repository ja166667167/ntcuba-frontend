import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ntcuba-news-manage',
  templateUrl: './news-manage.component.html',
  styleUrls: ['./news-manage.component.scss'],
})
export class NewsManageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('NewsManage Component');
  }
}
