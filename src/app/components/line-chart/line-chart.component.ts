import { Component, } from '@angular/core';
import { ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {

  lineChartData: ChartDataset[] = [
    {
      data: [85, 75, 75, 73, 79, 75, 86],
      label: ' Current Week',
      borderColor: 'blue',
      backgroundColor: 'blue',
    },
    {
      data: [80, 70, 72, 70, 78, 73, 84],
      label: 'Previous Week',
      borderColor: 'red',
      backgroundColor: 'red',
    },
  ];

  lineChartLabels: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  lineChartOptions = {
    responsive: true,
    stacked: false,
  };

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

}


