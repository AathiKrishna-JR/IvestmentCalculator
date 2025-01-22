import { CurrencyPipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-iresult',
  imports: [CurrencyPipe],
  templateUrl: './iresult.component.html',
  styleUrl: './iresult.component.css'
})
export class IresultComponent {
  results =input< {
            year: number,
            interest: number,
            valueEndOfYear: number,
            annualInvestment: number,
            totalInterest: number,
            totalAmountInvested: number,
         }[]>();

}
