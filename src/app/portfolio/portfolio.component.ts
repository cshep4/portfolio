import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {JsonReaderService} from '../service/json-reader-service';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioPageComponent implements OnInit {
  url = '../../../assets/json/projects.json';
  name: string;
  project: any;

  constructor(private route: ActivatedRoute,
              private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['name'];

      if (!this.name) {
        return;
      }

      this.jsonReaderService.readJson(this.url).then(result => {
        const data: any = result;
        this.project = data.find( d => d.name === this.name);
        console.log(this.project);
      }, err => {
        this.project = null;
        console.log(this.project);
      });
    });
  }

}
