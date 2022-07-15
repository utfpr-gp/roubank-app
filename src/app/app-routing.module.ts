import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './util/authentication.guard';
import { BalanceComponent } from './balance/balance.component';
import { BankStatementComponent } from './bank-statement/bank-statement.component';
import { CityComponent } from './admin/city/city.component';
import { DepositComponent } from './deposit/deposit.component';
import { DonationComponent } from './donation/donation.component';
import { DonationStatementComponent } from './donation/donation-statement/donation-statement.component';
import { DraftComponent } from './draft/draft.component';
import { LandPageComponent } from './land-page/land-page.component';
import { LinkDonationStatementComponent } from './donation/link-donation-statement/link-donation-statement.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { OperationDetailComponent } from './operation-detail/operation-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  { path: 'inicio', component: LandPageComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'a/usuarios',
    component: UserComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'a/cidades',
    component: CityComponent,
    canActivate: [AuthenticationGuard],
  },
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
  { path: 'nao-autorizado', component: NotauthorizedComponent },
  { path: 'rascunho', component: DraftComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: [AuthenticationGuard],
})
export class AppRoutingModule {}
