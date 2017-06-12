import {Component, Input} from "@angular/core";
import {Product} from "../../model/product";
@Component({
  moduleId:module.id,
  selector: 'auction-product-item',
  templateUrl: './auction-product-item.component.html'
})

export class AuctionProductItemComponent {

  @Input()
  product:Product;
}
