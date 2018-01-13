import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  user: User = JSON.parse(window.localStorage.getItem('user'));

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
