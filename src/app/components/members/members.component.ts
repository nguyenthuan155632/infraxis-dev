import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../../router.animations'; 
import { MessageService } from './../../services/message.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit, OnDestroy {

  name: string = '';
  email: string ='';
  state: string = '';
  subscription: Subscription;
  messages: any;

  constructor(public af: AngularFireAuth, private router: Router,
              private messageService: MessageService) {

    // Messages Subscription
    this.subscription = messageService.getMsg().subscribe(messages => { this.messages = messages; });

    this.af.authState.subscribe(auth => {
      if(auth) {
        this.name = auth.displayName;
        this.email = auth.email;
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.af.auth.signOut();
    console.log('logged out');
    this.router.navigate(['/login']);
    location.reload();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
