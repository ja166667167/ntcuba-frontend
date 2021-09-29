import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/app/share/module/material.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { GamesComponent } from '../pages/games/games.component';
import { HomeComponent } from '../pages/home/home.component';
import { RecordsComponent } from '../pages/records/records.component';
import { TeamsComponent } from '../pages/teams/teams.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    GamesComponent,
    HomeComponent,
    RecordsComponent,
    TeamsComponent,
  ],
  imports: [CommonModule, MaterialModule, LayoutRoutingModule],
})
export class LayoutModule {}
