import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {AuctionNavbarComponent} from "./navbar/auction.navbar.component";
import {AuctionSearchComponent} from "./search/auction.search.component";
import {AuctionFooterComponent} from "./footer/auction.footer.component";
import {AuctionCarousel} from "./carousel/auction.navbar.component";
import {AuctionProductItemComponent} from "./product-item/auction-product-item.component";
import {AuctionStarsComponent} from "./stars/auction-stars.component";
import {ProductService} from "../services/product-service";

@NgModule({
  declarations: [
    AppComponent,
    AuctionNavbarComponent,
    AuctionSearchComponent,
    AuctionCarousel,
    AuctionFooterComponent,
    AuctionProductItemComponent,
    AuctionStarsComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
