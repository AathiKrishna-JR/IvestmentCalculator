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

  regex = /^[0-9]+$/;
 
enteredInitialInvestment = signal('');
enteredAnnualInvestment = signal('');
enteredExpectedReturn =signal('');
enteredDuration= signal('');

isEmpty = false
isDigit = false;
constructor(public investmentService : InvestmentService){}


  onSubmit(){

    if(this.enteredDuration() == '0')
    { 
      alert("Duration must not be zero");
    }
   
    else if(this.regex.test(this.enteredInitialInvestment()) && this.regex.test(this.enteredAnnualInvestment()) && this.regex.test(this.enteredExpectedReturn())&& this.regex.test(this.enteredDuration()))
    {
      this.investmentService.calculateInvestmentResults({
              initialInvestment : +this.enteredInitialInvestment(),
              duration : +this.enteredDuration(),
              expectedReturn : +this.enteredExpectedReturn(),
              annualInvestment : +this.enteredAnnualInvestment(),});
      alert("result calculated");
      this.enteredInitialInvestment.set('');
      this.enteredAnnualInvestment.set('');
      this.enteredAnnualInvestment.set('');
      this.enteredDuration.set('');
    }
    
    else if(this.enteredInitialInvestment().length == 0 || this.enteredAnnualInvestment().length == 0 || this.enteredExpectedReturn().length == 0 || this.enteredDuration().length == 0){
      this.isEmpty = true;
       alert("Fill Every Field");
    }
    
    else {
      this.isDigit = false;
      alert("Only numbers should be Enter");
    }
            
    
  }
}