import { KenshoPairsService } from './kensho-pairs.service';
import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { PairsMock } from '../models/pairs.mock';
import { TickersMock } from '../models/tickers.mock';

describe('Service: KenshoPairsService', () => {

  beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [
       HttpModule
     ],
     providers: [
       KenshoPairsService,
       { provide: XHRBackend, useClass: MockBackend },
     ]
   });
  });

  it('should get tickers', () => {
    inject([KenshoPairsService, XHRBackend], (KenshoPairsService, mockBackend) => {
      const mockResponse = TickersMock ;
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      KenshoPairsService.getTickers().subscribe((ticker) => {
        expect(ticker).toBe(mockResponse);
      });
    });
  });

  it('should get pairs', () => {
    inject([KenshoPairsService, XHRBackend], (KenshoPairsService, mockBackend) => {
      const mockResponse = PairsMock;
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      const tickers = ['MSFT', 'AAPL']
      KenshoPairsService.getPairs(tickers).subscribe((pairs) => {
        expect(pairs).toBe(mockResponse);
      });
    });
  });
});
