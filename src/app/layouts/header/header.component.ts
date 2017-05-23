import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { MessageService } from './../../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  langs: any[] = [];
  currentUser: any;
  authenticated: boolean = false;

  constructor(private translate: TranslateService, 
              private af: AngularFireAuth, 
              private messageService: MessageService,
              private router: Router) {
    // Translate Configures
    translate.addLangs(["en", "vi"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');

    // Send messages after changing language
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.subscribeMsg();
    });

    // Get currentUser after logging in
    this.af.authState.subscribe(auth => {
      if(auth) {
        this.currentUser = auth;
      }
    });

    // Get authentication status after logged-in/logged-out
    // And send again messages
    af.auth.onAuthStateChanged(isAuth => {
      if(isAuth) {
        this.authenticated = true;
        this.subscribeMsg();
      } else {
        this.authenticated = false;
        this.subscribeMsg();
      }
    });
  }

  ngOnInit() {
    // Rendering header view (languages)
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.langs = [];
      for(let lang of this.translate.getLangs()) {
        let item = {
          prefix: lang,
          thumbnail: "../../../../assets/images/" + lang + ".png"
        }
        this.langs.push(item);
      }
    });
  }

  // Send messages function
  subscribeMsg() {
    this.translate.get('MESSAGES').subscribe((resMsg: string) => {
      this.messageService.sendMsg(resMsg);
    });
  }

  logout() {
    this.af.auth.signOut();
    console.log('logged out');
    this.router.navigate(['/login']);
    // location.reload();
  }
}
