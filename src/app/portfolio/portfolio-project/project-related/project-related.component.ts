import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-project-related',
  templateUrl: './project-related.component.html',
  styleUrls: ['./project-related.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectRelatedComponent implements OnInit {
  @Input() related: any;

  constructor() { }

  ngOnInit() {}
}
