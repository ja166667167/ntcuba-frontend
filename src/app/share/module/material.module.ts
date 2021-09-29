import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule],
})
export class MaterialSharedModule {}