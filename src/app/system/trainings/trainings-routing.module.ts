import {SystemComponent} from '../system.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordTranslateComponent } from './word-translate/word-translate.component';
import { TranslateWordComponent } from './translate-word/translate-word.component';
import { TrainingsComponent } from './trainings.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';

const routes: Routes = [
    {path: 'trainingsList', component: TrainingsListComponent},
    {path: 'wordTranslate', component: WordTranslateComponent},
    {path: 'translateWord', component: TranslateWordComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainingsRoutingModule {
}
