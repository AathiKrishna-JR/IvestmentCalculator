import { Component, signal } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { Calculation } from "./call.model";
import { IresultComponent } from "./iresult/iresult.component";

@Component({
    selector : "app-root",
    imports : [HeaderComponent, UserComponent, IresultComponent],
    templateUrl:"./app.component.html",
    styleUrl : "app.component.css"
})
export class AppComponent {
  
  resultsData = signal< {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
}[] | undefined >(undefined);
    
    calculateInvestmentResults(data :Calculation) {
        
      
      const annualData = [];
        let investmentValue = data.initialInvestment;
      
        for (let i = 0; i < data.duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
          investmentValue += interestEarnedInYear + data.annualInvestment;
          const totalInterest =
            investmentValue - data.annualInvestment * year - data.initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: data.annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: data.initialInvestment + data.annualInvestment * year,
          });
          this.resultsData.set(annualData);
      
        }
    }
}