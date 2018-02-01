import { Component } from '@angular/core';
import { KenshoPairsService } from '../services/kensho-pairs.service';
import { OnInit } from '@angular/core';
import { Tickers } from '../models/tickers';

@Component({
  selector: 'kensho-pairs-container',
  templateUrl: './kensho-pairs.container.component.html'
})
export class KenshoPairsContainerComponent {
  public tickers: Tickers;
  public displayChart: string;
  public showChartModal: boolean;

  constructor(private KenshoPairsService: KenshoPairsService) {
    this.KenshoPairsService.getTickers().subscribe((tickers) => {
      this.tickers = tickers;
    });
  }

  // public closeChartModal(): void {
  //   this.selectedChart = null;
  //   this.chartData = null;
  //   this.showChartModal = false;
  // }
  //
  // public showCharts(event: string): void {
  //   this.displayChart = event;
  // }
  //
  // public getChart(event: string, timespan = 'all', rollingAverage = '1months'): void {
  //   this.blockchainChartsService.getChart(event, timespan, rollingAverage).subscribe((chartData) => {
  //     this.selectedChart = event;
  //     this.chartData = chartData;
  //   });
  //   this.showChartModal = true;
  // }
}
