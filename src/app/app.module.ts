import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { AccountInformationService } from './services/account-information.service';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountSummaryComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AccountInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
