import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {
  @Input() project: any;

  constructor() { }

  ngOnInit() {}

  nagivate(url) {
    window.location.href = url;
  }

}
