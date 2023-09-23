import { Injectable } from '@angular/core';

export interface AccountInformation{
  name: string;
  number: string;
  branch: string;
  balance: number;
  currency: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountInformationService {

  constructor() { }

  getAccountInformation(): AccountInformation{
    return {
      name: "Iraj Mashar",
      number: "7005 2343 2034 2340 2344",
      branch: "Geretsried, Deutschland",
      balance: 2843.34,
      currency: "EUR"
    };
  }

}
