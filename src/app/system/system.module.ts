import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';

@NgModule({
    declarations: [SystemComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule, SystemRoutingModule],
    // exports: [CommonModule, ReactiveFormsModule, FormsModule, SystemRoutingModule]
})
export class SystemModule {
}
