import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../../router.animations'; 
import { hoverShadow } from './../../animations/dashboard.animation'; 
import { MessageService } from './../../services/message.service';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, animate, style, transition, keyframes } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // animations: [moveIn(), fallIn(), moveInLeft()],
  // host: {'[@moveIn]': ''}
})
export class DashboardComponent implements OnInit, OnDestroy {

  state: string = '';
  subscription: Subscription;
  messages: any;
  currentUser: any;
  statusShadow: string = 'normal';

  constructor(public af: AngularFireAuth, private router: Router,
              private messageService: MessageService) {

    // Messages Subscription
    this.subscription = messageService.getMsg().subscribe(messages => { this.messages = messages; });

    this.af.authState.subscribe(auth => {
      if(auth) {
        this.currentUser = auth;
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.af.auth.signOut();
    console.log('logged out');
    this.router.navigate(['/login']);
    // location.reload();
  }

  overShadowFn() {
    this.statusShadow = 'active';
  }

  leaveShadowFn() {
    this.statusShadow = 'inactive';
  }

  navigateFn(fn: string[]) {
    this.router.navigate(fn);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
