import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MaterialSharedModule } from 'src/app/share/module/material.module';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [CommonModule, MaterialSharedModule, LayoutRoutingModule],
})
export class LayoutModule {}
