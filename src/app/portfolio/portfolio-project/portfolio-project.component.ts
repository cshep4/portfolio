import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {JsonReaderService} from '../../service/json-reader-service';
import $ from 'jquery';
import {UserCountService} from '../../service/user-count-service';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioProjectComponent implements OnInit {
  @Input() name: string;
  url = '../../assets/json/';
  project: any;
  userCount: any;
  labelIndex = 1;
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

  constructor(private jsonReaderService: JsonReaderService,
              private userCountService: UserCountService) { }

  ngOnInit() {
    const url = this.url + this.name + '.json';
    this.jsonReaderService.readJson(url).then(result => {
      console.log(result);

      this.project = result;

      if (this.project.userCount) {
        this.userCountService.getUserCount(this.project.userCount).then((res: any) => {
          this.userCount = res.body;
        }, err => {
          this.userCount = 'Could not retrieve user count, please try again';
        });
      }
    }, err => {
      console.log(err);
      // this.nagivate('/portfolio');
    });
  }

  nagivate(url) {
    window.location.href = url;
  }

  getNumber(n) {
    return new Array(n);
  }

  getLabelColour(arr, index) {
    let label;
    switch (this.labelIndex) {
      case 1 :
        label = 'label label-green';
        break;
      case 2 :
        label = 'label label-blue';
        break;
      case 3 :
        label = 'label label-yellow';
        break;
      default :
        label = 'label label-red';
        break;
    }

    this.labelIndex++;

    if (this.labelIndex > 4) {
      this.labelIndex = 1;
    }

    // force labels to start at same colour when re-rendering
    if (index === arr.length - 1) {
      this.labelIndex = 1;
    }

    return label;
  }
}
