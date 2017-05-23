import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from './../../router.animations';
import * as firebase from 'firebase/app';
import { NotificationsService } from 'angular2-notifications';
import { MessageService } from './../../services/message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit, OnDestroy {

  state: string = '';
  error: any;
  messages: any;
  subscription: Subscription;

  constructor(public af: AngularFireAuth, private router: Router,
              private _toastrService: NotificationsService,
              private messageService: MessageService) { 

    this.subscription = messageService.getMsg().subscribe(messages => { this.messages = messages; });

  }

  ngOnInit() {
  }

  onSubmit(formData) {
    if(formData.valid) {
      this.af.auth.createUserWithEmailAndPassword(
        formData.value.email,
        formData.value.password
      ).then(
        (success) => {
        console.log(success);
        this._toastrService.success(this.messages.signup.title, this.messages.signup.success);
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

  loginFacebook() {
    this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
        (success) => {
        this._toastrService.success(this.messages.signup.title, this.messages.signup.success);
        this.router.navigate(['/dashboard']);
      }).catch(
        (err) => {
        this.error = err;
      });
  }

  loginGoogle() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(
        (success) => {
        this._toastrService.success(this.messages.signup.title, this.messages.signup.success);
        this.router.navigate(['/dashboard']);
      }).catch(
        (err) => {
        this.error = err;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
