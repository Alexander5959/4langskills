import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../shared/services/words.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.sass']
})
export class WordsComponent implements OnInit {

  userWordSets;
  selectedSet;
  words;
  cardHovered: boolean;

  constructor(private wordsService: WordsService) { }

  ngOnInit() {
    this.wordsService.getUserSetsById(JSON.parse(localStorage.getItem('user')).id).subscribe((sets) => {// id беру из локального хранилища
      this.userWordSets = sets;
      this.selectedSet = this.userWordSets[0].set_name;
      console.log(this.userWordSets[0].set_name);
      this.onChange();
    });
  }

  onChange() {
    console.log(this.selectedSet);
    this.wordsService.getWordsFromSet(JSON.parse(localStorage.getItem('user')).id, this.selectedSet)
      .subscribe((words) => {
        this.words = words;
      });
  }

  onSound() {
    console.log('ololo');
  }

}
