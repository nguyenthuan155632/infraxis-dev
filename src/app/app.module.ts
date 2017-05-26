import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// AngularFirebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './../environments/firebase.config';

// Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MembersComponent } from './components/members/members.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoteComponent } from './components/infra/note/note.component';
import { ChartComponent } from './components/infra/note/chart/chart.component';
import { InformationComponent } from './components/infra/note/information/information.component';
import { NewsComponent } from './components/infra/note/news/news.component';
import { AdvertisementComponent } from './components/infra/note/advertisement/advertisement.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { InfraComponent } from './components/infra/infra.component';
import { ContainerComponent } from './components/infra/container/container.component';
import { CurrenciesComponent } from './components/infra/currencies/currencies.component';
import { BitcoinComponent } from './components/infra/currencies/bitcoin/bitcoin.component';
import { EthereumComponent } from './components/infra/currencies/ethereum/ethereum.component';
import { RippleComponent } from './components/infra/currencies/ripple/ripple.component';
import { NoteFullPageComponent } from './components/infra/note/note-full-page/note-full-page.component';

// Routes
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app-routing.module';

// Services
import { AuthGuard } from './services/auth.service';
import { MessageService } from './services/message.service';

// Bootstrap
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

// ToastrNotification
import { SimpleNotificationsModule } from 'angular2-notifications';

// I18n
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Directives
import { NoteDirective } from './directives/note.directive';

// Chart
import { ChartModule } from 'angular2-highcharts';


export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MembersComponent,
    HeaderComponent,
    DashboardComponent,
    NoteComponent,
    MenuComponent,
    FooterComponent,
    InfraComponent,
    CurrenciesComponent,
    BitcoinComponent,
    ContainerComponent,
    EthereumComponent,
    RippleComponent,
    NoteDirective,
    ChartComponent,
    InformationComponent,
    NewsComponent,
    AdvertisementComponent,
    NoteFullPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    // ChartModule.forRoot(require('highcharts')),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [AngularFireAuth, AuthGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
