import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-project-reviews',
  templateUrl: './project-reviews.component.html',
  styleUrls: ['./project-reviews.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectReviewsComponent implements OnInit {
  @Input() reviews: any;
  carouselOpts = {
    loop: true,
    margin: 0,
    nav: true,
    navText: ['<i class="zmdi zmdi-arrow-left"></i>', '<i class="zmdi zmdi-arrow-right"></i>'],
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      }
    }
  };

  constructor() { }

  ngOnInit() {}

  getNumber(n) {
    return new Array(n);
  }
}
