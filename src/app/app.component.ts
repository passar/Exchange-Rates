import { Component } from '@angular/core';
import { ExchangeServiceService } from './exchange-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private exService: ExchangeServiceService) {}

  exchangeRate = '';
  hasResult = false;
  result = [];
  currencies = ["EUR", "GBP", "SEK"];

  getRates() {
    this.exService.getExchangeRate(this.exchangeRate)
    .subscribe((rate: any) => {
      this.hasResult = true;
      this.result = rate.rates;
    });
  }



}
