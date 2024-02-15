import { Component } from '@angular/core';
import { ProductService } from 'src/app/ax-core/services/product.service';
import { product } from 'src/app/data-type';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss'],
})
export class ProductcardComponent {
  trendyProducts: undefined | product[];

  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.product.trendyProducts().subscribe((data) => {
      this.trendyProducts = data;
    });
  }
}
