import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/products/product.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  products: Array<Product>;
  productsSub: Subscription;


  RangeMod: boolean;
  success: boolean;

  constructor(private productService: ProductService, private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.productsSub = this.productService.products.subscribe((products : Array<Product>) => { this.products = products});
    this.success = true;
    this.RangeMod = false;
  }

  SwitchRangeMod() {
    if(this.RangeMod === false) {
      this.RangeMod = true;
    } else {
      this.RangeMod = false;
    }
  }

  onClickSignOut() {
    this.authService
    .signOut()
    .then(() => {
      this.router.navigateByUrl('auth');
    });
  }

  ngOnDestroy() {
    this.productsSub.unsubscribe();
  }

}
