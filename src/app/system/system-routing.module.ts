import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SystemComponent } from './system.component';
import { WordsComponent } from './words/words.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingsListComponent } from './trainings/trainings-list/trainings-list.component';
import { WordTranslateComponent } from './trainings/word-translate/word-translate.component';
import { TranslateWordComponent } from './trainings/translate-word/translate-word.component';

const routes: Routes = [
    {path: 'system', component: SystemComponent, children: [
        {path: 'words', component: WordsComponent},
        {path: 'trainings', component: TrainingsComponent, children: [
            {path: 'trainingsList', component: TrainingsListComponent},
            {path: 'wordTranslate', component: WordTranslateComponent},
            {path: 'translateWord', component: TranslateWordComponent},
        ]}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {
}
