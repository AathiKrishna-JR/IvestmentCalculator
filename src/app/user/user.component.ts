import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Calculation } from '../call.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

 
enteredInitialInvestment = signal('1000');
enteredAnnualInvestment = signal('200');
enteredExpectedReturn =signal('5');
enteredDuration= signal('10');

constructor(public investmentService : InvestmentService){}


  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment : +this.enteredInitialInvestment(),
  duration : +this.enteredDuration(),
  expectedReturn : +this.enteredExpectedReturn(),
  annualInvestment : +this.enteredAnnualInvestment(),
});
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0')
    this.enteredAnnualInvestment.set('0')
    this.enteredDuration.set('0')
}
}
