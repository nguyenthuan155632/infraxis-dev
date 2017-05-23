import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { moveIn } from '../../router.animations';
import { NotificationsService } from 'angular2-notifications';
import { MessageService } from './../../services/message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // animations: [moveIn()],
  // host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit, OnDestroy {

  // member: Observable<firebase.User>;
  state: string = '';
  error: any;
  messages: any;
  subscription: Subscription;

  constructor(public af: AngularFireAuth, private router: Router, 
              private _toastrService: NotificationsService,
              private messageService: MessageService) {
    
    // Messages Subscription
    this.subscription = messageService.getMsg().subscribe(messages => { this.messages = messages; });

    // Authentication
    // this.member = af.authState;
    this.af.authState.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  ngOnInit() {
  }

  loginFacebook() {
    this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
        (success) => {
        this._toastrService.success(this.messages.login.title, this.messages.login.success);
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
        this._toastrService.success(this.messages.login.title, this.messages.login.success);
        this.router.navigate(['/dashboard']);
      }).catch(
        (err) => {
        this.error = err;
      });
  }

  onSubmit(formData) {
    if(formData.valid) {
      this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
      .then(
        (success) => {
        console.log(success);
        this._toastrService.success(this.messages.login.title, this.messages.login.success);
        this.router.navigate(['/dashboard']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
