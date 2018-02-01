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
  public pairData: any;

  constructor(private KenshoPairsService: KenshoPairsService) {
    this.KenshoPairsService.getTickers().subscribe((tickers) => {
      this.tickers = tickers;
    }, (error) => {
      console.log('get Tickers service error');
    });
  }

  public closeChartModal(): void {
    this.pairData = null;
    this.showChartModal = false;
  }

  public getPairs(event: any): void {
    const tickers = Object.values(event);
    this.KenshoPairsService.getPairs(tickers).subscribe((pairData) => {
      this.pairData = pairData;
    }, (error) => {
      console.log('get Pairs service error');
    });
    this.showChartModal = true;
  }
}
