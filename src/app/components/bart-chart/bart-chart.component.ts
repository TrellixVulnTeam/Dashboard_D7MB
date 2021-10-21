import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bart-chart.component.html',
  styleUrls: ['./bart-chart.component.css']
})

export class BartChartComponent {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataset[] = [
    { data: [1500, 1600, 1560, 1670, 1546, 1433, 1562, 1612, 1520, 1405, 1473, 1507], label: 'Orders' },
    { data: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500], label: 'Projections' }
  ];

}
