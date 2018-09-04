import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {JsonReaderService} from '../../service/json-reader-service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {
  url = '../../../assets/json/skills.json';
  skills: any;

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.readJson(this.url).then(result => {
      this.skills = result;
    }, err => {
      this.skills = [[]];
    });
  }

}
