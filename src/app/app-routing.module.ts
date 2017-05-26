import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MembersComponent } from './components/members/members.component';
import { AuthGuard } from './services/auth.service';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoteComponent } from './components/infra/note/note.component';
import { InfraComponent } from './components/infra/infra.component';
import { CurrenciesComponent } from './components/infra/currencies/currencies.component';
import { BitcoinComponent } from './components/infra/currencies/bitcoin/bitcoin.component';
import { EthereumComponent } from './components/infra/currencies/ethereum/ethereum.component';
import { RippleComponent } from './components/infra/currencies/ripple/ripple.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'infra', component: InfraComponent, children: [
    { path: 'currencies', component: CurrenciesComponent, children: [
        { path: 'bitcoin', component: BitcoinComponent },
        { path: 'ethereum', component: EthereumComponent },
        { path: 'ripple', component: RippleComponent }
      ] },
    { path: 'note', component: NoteComponent }
  ], canActivate: [AuthGuard] }
];