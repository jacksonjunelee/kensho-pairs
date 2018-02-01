import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { KenshoPairsContainerComponent} from './kensho-pairs.container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { KenshoPairsService } from '../services/kensho-pairs.service';
import { KenshoPairsServiceSpy } from '../services/kensho-pairs-spy.service';
import { TickersMock } from '../models/tickers.mock';
import { PairsMock } from '../models/pairs.mock';

describe('Kensho Pairs Container', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        KenshoPairsContainerComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: KenshoPairsService, useClass: KenshoPairsServiceSpy }
      ]
    }).compileComponents();
  }));

  it('should be defined', () => {
    const fixture = TestBed.createComponent(KenshoPairsContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeDefined();
  });

  it('should make a service call on init to get stats', () => {
    const fixture = TestBed.createComponent(KenshoPairsContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    const tickersMock = TickersMock;
    expect(comp.tickers).toBe(tickersMock);
  });

  it('should make a service call to get pairs', () => {
    const fixture = TestBed.createComponent(KenshoPairsContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    const object = {
      0: 'GOOG',
      1: 'AAPL'
    }
    comp.getPairs(object);
    expect(comp.pairData).toBeTruthy;
    expect(comp.showChartModal).toBeTruthy;
  });

  it('should close chart modal and reset data', () => {
    const fixture = TestBed.createComponent(KenshoPairsContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    const pairsMock = PairsMock;
    comp.pairData = pairsMock;
    comp.closeChartModal();
    expect(comp.pairData).toBeFalsy;
    expect(comp.showChartModal).toBeFalsy;
  })
});
