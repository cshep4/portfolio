import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrls: ['./skill-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillRowComponent implements OnInit {
  @Input() skillRow: any;

  constructor() { }

  ngOnInit() {
  }

}
