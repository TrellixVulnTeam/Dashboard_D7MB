import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-selling-table-line]',
  templateUrl: './selling-table-line.component.html',
  styleUrls: ['./selling-table-line.component.css']
})
export class SellingTableLineComponent implements OnInit {

  @Input() id: number;
  @Input() animal: string;
  @Input() category: string;
  @Input() marque: string;
  @Input() name: string;
  @Input() price: number;

  @Input() orders: number;
  total: number;

  constructor() { }

  ngOnInit(): void {
  }

}
