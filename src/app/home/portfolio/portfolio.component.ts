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
  kripto: any;
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

      this.kripto = result[0];
      this.portfolioWebsite = result[1];
      this.premierPredictor = result[2];
      this.worldCupPredictor = result[3];
      this.monsterAttack = result[4];
      this.gyme = result[5];
      this.gameEngine = result[6];
    }, err => {
      console.log(err);
    });
  }

}
