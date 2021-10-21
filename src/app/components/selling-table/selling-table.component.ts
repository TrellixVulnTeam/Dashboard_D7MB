import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-selling-table',
  templateUrl: './selling-table.component.html',
  styleUrls: ['./selling-table.component.css']
})
export class SellingTableComponent implements OnInit {

  @Input() products: Array<Product>;

  constructor() { }

  ngOnInit(): void {
  }

}
