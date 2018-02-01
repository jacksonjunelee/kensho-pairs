import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';
import { Tickers } from '../../models/tickers';

@Component({
  selector: 'kensho-pairs-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() tickers: Tickers;
  // @Output() buttonMouseOver: EventEmitter<string> = new EventEmitter<string>();
  @Output() showChart: EventEmitter<string> = new EventEmitter<string>();


  public isSelected(chart: string): string {
    return 'selected-button';
  }
  //
  // public mouseOver(chart: string): void {
  //   this.selectedButton = chart;
  //   this.buttonMouseOver.emit(chart);
  // }

  public clickedChart(id: string) {
    this.showChart.emit(id);
  }
}
