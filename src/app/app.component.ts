import {Component, OnInit} from "@angular/core";
import {Product} from "../model/product";
import {ProductService} from "../services/product-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Array<Product> = [];


  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }


}
