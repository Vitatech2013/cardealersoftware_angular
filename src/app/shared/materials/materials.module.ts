import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const materialsComponent: any = [
  MatButtonModule, 
  MatDialogModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, materialsComponent],
  exports: [materialsComponent],
})
export class MaterialsModule {}
