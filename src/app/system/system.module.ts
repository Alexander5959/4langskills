import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { MaterialModule } from '../material.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
    SystemComponent,
    ProfileComponent
],
    imports: [CommonModule, ReactiveFormsModule, FormsModule, SystemRoutingModule, MaterialModule],
    // exports: [CommonModule, ReactiveFormsModule, FormsModule, SystemRoutingModule]
})
export class SystemModule {
}
