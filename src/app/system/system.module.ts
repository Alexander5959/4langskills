import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { MaterialModule } from '../material.module';
import { ProfileComponent } from './profile/profile.component';
import { WordsService } from '../shared/services/words.service';
import { HttpClientModule } from '@angular/common/http';
import { WordsComponent, CreateNewSetDialogComponent, AddWordDialogComponent } from './words/words.component';
import { TrainingsModule } from './trainings/trainings.module';

@NgModule({
    declarations: [
    SystemComponent,
    ProfileComponent,
    WordsComponent,
    CreateNewSetDialogComponent,
    AddWordDialogComponent
],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SystemRoutingModule,
        MaterialModule,
        HttpClientModule,
        TrainingsModule
    ],
    entryComponents: [
        CreateNewSetDialogComponent,
        WordsComponent,
        AddWordDialogComponent
    ],
    // exports: [CommonModule, ReactiveFormsModule, FormsModule, SystemRoutingModule]
    providers: [WordsService]
})
export class SystemModule {
}
