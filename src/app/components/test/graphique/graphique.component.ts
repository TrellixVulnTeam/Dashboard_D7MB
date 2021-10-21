import { Component,OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css']
})
export class GraphiqueComponent implements OnInit {

  type: ChartType;
  labels: string[];
  datasets: ChartDataset[];
  options: ChartOptions;

  constructor() {
    this.type = 'doughnut';

    this.labels = ['Chat', 'Chien', 'Rongeur', 'Oiseau'];

    this.datasets = [
      {
        label: 'Dataset 1',
        data: [15, 25, 10, 5],
        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green'],
      }
    ];

    this.options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    };

   }

  ngOnInit(): void {
  }
}
