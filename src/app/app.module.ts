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
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NgModule } from '@angular/core';
import { WithdrawComponent } from './withdraw/withdraw.component';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ModalComponent } from './shared/modal/modal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
