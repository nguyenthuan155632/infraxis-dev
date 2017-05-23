import { CanActivate, Router } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

  // public currentUser: any;

  constructor(private af: AngularFireAuth, private router: Router) {
    // this.af.authState.subscribe(auth => {
    //   if(auth) {
    //     this.currentUser = auth;
    //   }
    // });
  }

  canActivate(): Observable<boolean> {
    return Observable.from(this.af.authState)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
    if 
      (!authenticated) this.router.navigate([ '/login' ]);
    })
  }

  // isAuthenticated(): Observable<any> {
  //   return this.af.authState;
  // } 
}