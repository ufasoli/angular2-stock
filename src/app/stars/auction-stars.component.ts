import {Component, Input, OnInit} from "@angular/core";
@Component({
  moduleId: module.id,
  selector: 'auction-stars',
  templateUrl: './auction-stars.component.html'
})

export class AuctionStarsComponent implements OnInit {
  @Input() count: number = 5;
  @Input() rating: number = 0;
  stars: boolean[] = [];


  ngOnInit(): void {
    for (let i = 1; i < this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
