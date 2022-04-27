import { RouterModule, Routes } from '@angular/router';

import { BalanceComponent } from './balance/balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { DonationComponent } from './donation/donation.component';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: LandPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'doacao', component: DonationComponent },
  { path: 'saldo', component: BalanceComponent },
  { path: 'deposito', component: DepositComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
