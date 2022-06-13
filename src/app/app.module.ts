import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BalanceComponent } from './balance/balance.component';
import { BalancePanelComponent } from './shared/balance-panel/balance-panel.component';
import { BankStatementComponent } from './bank-statement/bank-statement.component';
import { BrowserModule } from '@angular/platform-browser';
import { DepositComponent } from './deposit/deposit.component';
import { DonationComponent } from './donation/donation.component';
import { DonationStatementComponent } from './donation/donation-statement/donation-statement.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandPageComponent } from './land-page/land-page.component';
import { LinkDonationStatementComponent } from './donation/link-donation-statement/link-donation-statement.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ModalComponent } from './shared/modal/modal.component';
import { NgModule } from '@angular/core';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { OperationDetailComponent } from './operation-detail/operation-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TotalUsersComponent } from './user/total-users/total-users.component';
import { UserComponent } from './user/user.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { DraftComponent } from './draft/draft.component';

// import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
// import ptBr from '@angular/common/locales/pt';
// import { registerLocaleData } from '@angular/common';

//registerLocaleData(ptBr);

@NgModule({
  declarations: [
    ExponentialStrengthPipe,
    AppComponent,
    MenuComponent,
    FooterComponent,
    LandPageComponent,
    LoginComponent,
    DonationComponent,
    BalanceComponent,
    DepositComponent,
    BalancePanelComponent,
    WithdrawComponent,
    BankStatementComponent,
    ModalComponent,
    PageNotFoundComponent,
    OperationDetailComponent,
    DonationStatementComponent,
    LinkDonationStatementComponent,
    UserComponent,
    NotauthorizedComponent,
    TotalUsersComponent,
    CpfPipe,
    DraftComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  //providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
