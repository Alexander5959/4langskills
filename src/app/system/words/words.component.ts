import { Component, OnInit, Inject } from '@angular/core';
import { WordsService } from '../../shared/services/words.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs/Observable';

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
  newSetName: string;
  newWord: string;

  constructor(private wordsService: WordsService, public dialog: MatDialog) { }

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

  onCreateNewSet(): void {
    // tslint:disable-next-line:prefer-const
    let createNewSetDialogRef = this.dialog.open(CreateNewSetDialogComponent, {
      width: '300px',
      data: { newSetName: this.newSetName }
    });

    createNewSetDialogRef.afterClosed().subscribe(result => {
      this.newSetName = result;
      this.wordsService.setNewWordSet(JSON.parse(localStorage.getItem('user')).id, this.newSetName)
      .subscribe((data) => { console.log(data); });
      this.ngOnInit();
    });
    this.ngOnInit();

  }

  onDeleteSet() {
    this.wordsService.deleteUserSet(JSON.parse(localStorage.getItem('user')).id, this.selectedSet).subscribe((response) => {
      console.log(response);
      this.ngOnInit();
    });
    this.ngOnInit();
  }

  onAddWord() {
    // tslint:disable-next-line:prefer-const
    let addWordDialogRef = this.dialog.open(AddWordDialogComponent, {
      width: '600px',
      data: { choosedSet: this.selectedSet, newWord: this.newWord }
    });

    addWordDialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.newSetName = result;
      // this.wordsService.setNewWordSet(JSON.parse(localStorage.getItem('user')).id, this.newSetName)
      // .subscribe((data) => { console.log(data); });
      // this.ngOnInit();
    });
    // this.ngOnInit();
  }

  onSound() {
    console.log('ololo');
  }

}

@Component({
  selector: 'app-create-new-set-dialog',
  templateUrl: 'create-new-set.dialog.html'
})
export class CreateNewSetDialogComponent {

  constructor(
    public createNewSetDialogRef: MatDialogRef<CreateNewSetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.createNewSetDialogRef.close();
  }

}

@Component({
  selector: 'app-add-word-dialog',
  templateUrl: 'add-word-to-set.dialog.html'
})
export class AddWordDialogComponent implements OnInit {

  input;
  selectedTranslation = '';
  loadedData: {};
  result: {};

  constructor(
    public addWordDialogRef: MatDialogRef<AddWordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private wordsService: WordsService
  ) { }

  ngOnInit() {
    this.input = document.getElementById('wordInput');
    Observable.fromEvent(this.input, 'keyup').map(e => e.target.value)
      .debounceTime(1500).distinct()
      .subscribe(x => {
        // console.log(x);
        this.wordsService.getTranslations(x)
        // tslint:disable-next-line:no-shadowed-variable
        .map((x) => JSON.parse(x))
        .subscribe((data) => { this.loadedData = data; console.log(this.loadedData); });
      });
  }

  onNoClick(): void {
    this.addWordDialogRef.close();
  }

}
