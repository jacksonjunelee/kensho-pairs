import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'kensho-pairs-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnChanges {
  @Input() pairData: any;

  public chartData: any;

  public formatData(chartData): void {
    const pairs = chartData.correlations;
    chartData.correlations.sort((a, b) => b.value - a.value);
    this.chartData = chartData;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pairData'] && changes['pairData'].currentValue) {
      this.formatData(changes['pairData'].currentValue);
    }
  }
}
