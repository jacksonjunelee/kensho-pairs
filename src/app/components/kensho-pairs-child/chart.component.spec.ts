import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ChartComponent } from './chart.component';
import { NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { PairsMock } from '../../models/pairs.mock';

describe('Chart Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChartComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should be defined', () => {
    const fixture = TestBed.createComponent(ChartComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeDefined();
  });

  it('should format pairs data', () => {
    const fixture = TestBed.createComponent(ChartComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.ngOnChanges({
      pairData: new SimpleChange(null, PairsMock, false)
    });
    fixture.detectChanges();
    expect(comp.chartData.correlations.length).toBeGreaterThan(1);
  })
});
