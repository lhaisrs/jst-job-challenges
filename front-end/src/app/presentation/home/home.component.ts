import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FactUsecase } from 'src/app/domain/usecases/fact.usecase';
import { Observable } from 'rxjs';
import { FactModel } from 'src/app/domain/models/fact.model';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit {

  public facts$: Observable<FactModel[]>;
  public page = 1;

  // BarChart
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}]},
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barCharLegend = true;
  public barChartData: ChartDataSets = {
    data: [9, 0, 8],
    label: 'Most Voted'
  };
  public barChartPlugins = [pluginDataLabels];

  constructor(public list: FactUsecase) {}

  async ngOnInit() {
    this.list.loading().subscribe();
    this.facts$ = this.list.fetch();
    this.list.sort().subscribe((mostVotedFacts) => {
      this.barChartData.data = mostVotedFacts.map((item) => item.entity.upvotes);
      this.barChartLabels = mostVotedFacts.map((item) => item.entity.upvotes.toString());
    });
  }

}
