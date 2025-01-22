import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
enteredInitialInvestment = '0';
enteredAnnualInvestment = '0';
enteredExpectedReturn ='5';
enteredDuration= '10'
  onSubmit(){
  console.log(this.enteredInitialInvestment);
  console.log(this.enteredAnnualInvestment);
  console.log(this.enteredExpectedReturn);
  console.log(this.enteredDuration);
  
  
  
}
}
