import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { AccountInformationService } from './services/account-information.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AccountInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
