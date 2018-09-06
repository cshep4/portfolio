import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {JsonReaderService} from '../service/json-reader-service';

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

}
