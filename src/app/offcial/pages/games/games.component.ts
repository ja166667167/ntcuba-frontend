import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ntcuba-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Games component');
  }
}
