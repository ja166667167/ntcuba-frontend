import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ntcuba-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.scss'],
})
export class WorkbenchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Workbench component');
  }
}
