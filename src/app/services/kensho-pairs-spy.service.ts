import { TickersMock } from '../models/tickers.mock';
import { Observable } from 'rxjs/Observable';
import { Tickers } from '../models/tickers';
import { Pairs } from '../models/pairs';
import { PairsMock } from '../models/pairs.mock';

export class KenshoPairsServiceSpy {
  getTickers(): Observable<Tickers> {
    const tickers = TickersMock;
    return new Observable<Tickers>(observe => observe.next(tickers));
  }

  getPairs(tickers: any): Observable<Pairs> {
    const pairs = PairsMock;
    return new Observable<Pairs>(observe => observe.next(pairs));
  }
}
