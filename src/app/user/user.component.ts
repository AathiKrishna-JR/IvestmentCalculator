import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Calculation } from '../call.model';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

@Output () calculateInvestment = new EventEmitter<Calculation>();

enteredInitialInvestment = '1';
enteredAnnualInvestment = '1';
enteredExpectedReturn ='5';
enteredDuration= '10'

const calData : Calculation = {
  initialInvestment : Number(this.enteredInitialInvestment),
  duration : Number(this.enteredDuration),
  expectedReturn : Number(this.enteredExpectedReturn),
  annualInvestment : Number(this.enteredAnnualInvestment),

};

}
  onSubmit(){
  
    this.calculateInvestment.emit(this.calData);
  
  
}
}
