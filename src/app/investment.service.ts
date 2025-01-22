import { Injectable } from "@angular/core";
import { Calculation } from "./call.model";

@Injectable({ providedIn : 'root'})
export class InvestmentService {
    

    resultData ?: {
        year: number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number,
    }[];
  
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
            this.resultData = annualData;
        
          }
      }
}