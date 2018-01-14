import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { MaterialModule } from '../material.module';
import { ProfileComponent } from './profile/profile.component';
import { WordsService } from '../shared/services/words.service';
import { HttpClientModule } from '@angular/common/http';
import { WordsComponent } from './words/words.component';
import { SetsComponent } from './sets/sets.component';

@NgModule({
    declarations: [
    SystemComponent,
    ProfileComponent
,
    WordsComponent,
    SetsComponent
],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SystemRoutingModule,
        MaterialModule,
        HttpClientModule,
    ],
    // exports: [CommonModule, ReactiveFormsModule, FormsModule, SystemRoutingModule]
    providers: [WordsService]
})
export class SystemModule {
}
