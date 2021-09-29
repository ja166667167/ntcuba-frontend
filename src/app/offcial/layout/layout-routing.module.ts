import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from '../pages/games/games.component';
import { HomeComponent } from '../pages/home/home.component';
import { RecordsComponent } from '../pages/records/records.component';
import { TeamsComponent } from '../pages/teams/teams.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'teams',
        component: TeamsComponent,
      },
      {
        path: 'games',
        component: GamesComponent,
      },
      {
        path: 'records',
        component: RecordsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
