import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: BehaviorSubject<Array<Product>>;

  constructor() {
    const productsToPush = [
      new Product('Chien','Croquette','GrosseCroquette', 30,'MarqueLuxe'),
      new Product('Chien','Jouets','LeStick', 15,'SolidWoof'),
      new Product('Chat','Divers','LaMaisonPerché', 150,'CatCatMeowMeow'),
      new Product('Chat','Croquette','CatFresh', 30,'Cats&Cats'),
      new Product('Rongeur','Hygiène','PaPaille', 45,'LaFermeDesVilles'),
      new Product('Oiseau','Divers','JouetFou', 35,'PlumosMaxima'),
    ];

    this.products = new BehaviorSubject<Array<Product>>(productsToPush);
   }
}
