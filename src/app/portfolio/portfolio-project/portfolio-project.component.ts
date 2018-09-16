import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {JsonReaderService} from '../../service/json-reader-service';

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

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    const url = this.url + this.name + '.json';
    this.jsonReaderService.readJson(url).then(result => {
      console.log(result);

      this.project = result;

    }, err => {
      console.log(err);
      this.nagivate('/portfolio');
    });
  }

  nagivate(url) {
    window.location.href = url;
  }
}
