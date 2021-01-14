import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-project-navigation',
  templateUrl: './project-navigation.component.html',
  styleUrls: ['./project-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectNavigationComponent implements OnInit {
  @Input() project: any;

  constructor() { }

  ngOnInit() {}
}
