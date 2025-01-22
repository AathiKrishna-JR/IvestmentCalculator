import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-iresult',
  imports: [CurrencyPipe],
  templateUrl: './iresult.component.html',
  styleUrl: './iresult.component.css'
})
export class IresultComponent {
  @Input() results ?: {
            year: number,
            interest: number,
            valueEndOfYear: number,
            annualInvestment: number,
            totalInterest: number,
            totalAmountInvested: number,
         }[];

}
