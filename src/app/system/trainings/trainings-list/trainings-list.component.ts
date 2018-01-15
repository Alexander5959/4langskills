import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.sass']
})
export class TrainingsListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onWordTranslate() {
    this.router.navigate(['/system/trainings/wordTranslate']);
  }

  onTranslateWord() {
    this.router.navigate(['/system/trainings/translateWord']);
  }

}
