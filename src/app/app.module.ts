import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, FooterComponent, LandPageComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
