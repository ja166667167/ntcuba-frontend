import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkbenchComponent } from './workbench.component';
import { GameManageComponent } from './game-manage/game-manage.component';
import { RecordManageComponent } from './record-manage/record-manage.component';
import { NewsManageComponent } from './news-manage/news-manage.component';
import { TeamManageComponent } from './team-manage/team-manage.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { WorkbenchRoutingModule } from './workbench-routing.module';

@NgModule({
  declarations: [
    WorkbenchComponent,
    GameManageComponent,
    RecordManageComponent,
    NewsManageComponent,
    TeamManageComponent,
    AdminManageComponent,
  ],
  imports: [CommonModule, WorkbenchRoutingModule],
})
export class WorkbenchModule {}
