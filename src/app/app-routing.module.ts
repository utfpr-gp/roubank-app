import { RouterModule, Routes } from '@angular/router';

import { BalanceComponent } from './balance/balance.component';
import { BankStatementComponent } from './bank-statement/bank-statement.component';
import { DepositComponent } from './deposit/deposit.component';
import { DonationComponent } from './donation/donation.component';
import { DonationStatementComponent } from './donation/donation-statement/donation-statement.component';
import { LandPageComponent } from './land-page/land-page.component';
import { LinkDonationStatementComponent } from './donation/link-donation-statement/link-donation-statement.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { OperationDetailComponent } from './operation-detail/operation-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  { path: 'inicio', component: LandPageComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'doacao',
    component: DonationComponent,
    children: [
      {
        path: 'extrato',
        component: DonationStatementComponent,
      },
      {
        path: '',
        component: LinkDonationStatementComponent,
      },
    ],
  },
  { path: 'saldo', component: BalanceComponent },
  { path: 'extrato/detalhes/:id', component: OperationDetailComponent },
  { path: 'extrato', component: BankStatementComponent },
  { path: 'saque', component: WithdrawComponent },
  { path: 'deposito', component: DepositComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
