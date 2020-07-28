import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FactUsecase } from 'src/app/domain/usecases/fact.usecase';
import { Observable } from 'rxjs';
import { FactModel } from 'src/app/domain/models/fact.model';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit {

  public facts$: Observable<FactModel[]>;
  public page = 1; // First Page Pagination

  // BarChart
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { data: [],  label: 'Most Voted', backgroundColor: 'rgba(37, 153, 243, 1)' },
  ];

  constructor(public list: FactUsecase, private changeDetection: ChangeDetectorRef) { }

  async ngOnInit() {
    this.list.loading().subscribe();
    this.facts$ = this.list.fetch();
    this.list.sort().subscribe((mostVotedFacts) => {
      this.barChartData[0].data = mostVotedFacts.map((item) => item.entity.upvotes);
      this.barChartLabels = mostVotedFacts.map((item) => item.entity.user.name.first);
      this.changeDetection.detectChanges();
    });
  }

}
