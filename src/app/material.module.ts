import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule],
})
export class MaterialModule { }
