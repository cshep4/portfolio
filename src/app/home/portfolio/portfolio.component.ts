import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {JsonReaderService} from '../../service/json-reader-service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {
  url = '../../assets/json/projects.json';
  portfolioWebsite: any;
  premierPredictor: any;
  worldCupPredictor: any;
  monsterAttack: any;
  gyme: any;
  gameEngine: any;

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.readJson(this.url).then(result => {
      console.log(result);

      this.portfolioWebsite = result[0];
      this.premierPredictor = result[1];
      this.worldCupPredictor = result[2];
      this.monsterAttack = result[3];
      this.gyme = result[4];
      this.gameEngine = result[5];
    }, err => {
      console.log(err);
    });
  }

}
