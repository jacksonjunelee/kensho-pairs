import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';
import { Tickers } from '../../models/tickers';

@Component({
  selector: 'kensho-pairs-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() tickers: Tickers;
  @Output() showPairs: EventEmitter<any> = new EventEmitter<any>();

  public selectedTickers = {};

  public isSelected(i: number): string {
    return this.selectedTickers[i] ? 'selected-button' : '';
  }

  public addTicker(i: number, value: string): void {
    if (this.selectedTickers[i]) {
      delete this.selectedTickers[i];
    } else {
      this.selectedTickers[i] = value;
    }
  }

  public clickedShowPairs(): void {
    this.showPairs.emit(this.selectedTickers);
  }
}
