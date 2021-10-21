import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  @Input() value: string;
  @Input() percentage: string;
  iconStat: string;

  @Input() success: boolean
  color: string;

  constructor() { }

  ngOnInit(): void {
    if(this.success) {
      this.iconStat = 'bi-arrow-up-circle-fill'
      this.color = 'text-success'
    } else {
      this.iconStat = 'bi-arrow-down-circle-fill'
      this.color = 'text-danger'
    }
  }

}
