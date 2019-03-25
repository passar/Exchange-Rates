import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeServiceService {

  constructor(private http: HttpClient) { }

  getExchangeRate(rate: string) {
    return this.http.get(`https://api.exchangeratesapi.io/latest?base=${rate}`)
  }

}
