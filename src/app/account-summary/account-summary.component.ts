import { Component, OnInit } from '@angular/core';
import { AccountInformation, AccountInformationService } from '../services/account-information.service';


@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})

export class AccountSummaryComponent implements OnInit{

  title = "Account Summary";
  accountInformation: AccountInformation;
  isExpanded = true;

  constructor(private service: AccountInformationService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.accountInformation = this.service.getAccountInformation();
    
  }

  toggle(){
    this.isExpanded = !this.isExpanded;
  }


}
