import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Header Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should be defined', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeDefined();
  });

  it('should add ticker to object when button is clicked', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.addTicker(0, 'GOOG');
    expect(comp.selectedTickers[0]).toBe('GOOG');
  });

  it('should delete ticker when button is clicked twice', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.addTicker(0, 'GOOG');
    comp.addTicker(0, 'GOOG');
    expect(comp.selectedTickers[0]).toBeUndefined();
  })

  it('should emit when buttons are clicked', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const comp = fixture.debugElement.componentInstance;
    spyOn(comp.showPairs, 'emit');
    comp.clickedShowPairs();
    expect(comp.showPairs.emit).toHaveBeenCalled();
  });
});
