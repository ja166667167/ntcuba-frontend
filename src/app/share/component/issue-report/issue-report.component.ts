import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ntcuba-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.scss'],
})
export class IssueReportComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('IssueReport component');
  }
}
