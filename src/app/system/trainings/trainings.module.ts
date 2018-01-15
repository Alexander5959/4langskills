import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './trainings.component';
import { WordTranslateComponent } from './word-translate/word-translate.component';
import { TranslateWordComponent } from './translate-word/translate-word.component';
import { TrainingsRoutingModule } from './trainings-routing.module';
import { MaterialModule } from '../../material.module';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';

@NgModule({
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    MaterialModule
  ],
  declarations: [TrainingsComponent,
    WordTranslateComponent,
    TranslateWordComponent,
    WordTranslateComponent,
    TranslateWordComponent,
    TrainingsListComponent
]
})
export class TrainingsModule { }