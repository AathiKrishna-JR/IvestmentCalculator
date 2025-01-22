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
    
    
}