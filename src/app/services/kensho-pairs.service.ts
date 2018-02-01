import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Tickers } from '../models/tickers';

@Injectable()
export class KenshoPairsService {
  private apiUrl = 'http://k-fe-practical.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getTickers(): Observable<Tickers> {
    const url = `${this.apiUrl}/tickers`;
    return this.http.get(url);
  }

  getPairs(tickers: any) {
    let query = '';
    tickers.forEach((element, index) => {
      if (index === 0) {
        query += `tickers=${element}`;
      } else {
        query += `&tickers=${element}`;
      }
    })

    const url = `${this.apiUrl}/correlation/?${query}`;
    return this.http.get(url);
  }
}
