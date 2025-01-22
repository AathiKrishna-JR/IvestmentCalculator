import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-iresult',
  imports: [CurrencyPipe],
  templateUrl: './iresult.component.html',
  styleUrl: './iresult.component.css'
})
export class IresultComponent {
  private investmentServic = inject(InvestmentService);

  get results(){
    return this.investmentServic.resultData;
  }
}
