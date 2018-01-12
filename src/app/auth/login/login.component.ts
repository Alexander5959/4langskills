import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from '../../shared/models/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  message: Message;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.message = new Message('danger', '');
    this.signInForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  showMessage(text: string, type = 'danger') {
    this.message.text = text;
  }

  onSignIn() {
    this.usersService.getUserByEmail(this.signInForm.get('email').value).subscribe((user: User) => {
      if (user) {
        if (this.signInForm.get('password').value === user.password) {
          alert('good');
        } else {
          this.showMessage('Bad email or password');
        }
      } else {
        this.showMessage('This user does not exist');
      }
    });
  }

}
