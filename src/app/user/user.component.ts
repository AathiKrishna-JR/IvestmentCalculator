import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Calculation } from '../call.model';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

 calculateInvestment = output<Calculation>()
enteredInitialInvestment = signal('1');
enteredAnnualInvestment = signal('1');
enteredExpectedReturn =signal('5');
enteredDuration= signal('10');

 calData : Calculation = {
  initialInvestment : Number(this.enteredInitialInvestment()),
  duration : Number(this.enteredDuration()),
  expectedReturn : Number(this.enteredExpectedReturn()),
  annualInvestment : Number(this.enteredAnnualInvestment()),

};

  onSubmit(){
  
    this.calculateInvestment.emit(this.calData);
  
  
}
}
