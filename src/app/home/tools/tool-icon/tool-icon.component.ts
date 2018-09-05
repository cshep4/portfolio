import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tool-icon',
  templateUrl: './tool-icon.component.html',
  styleUrls: ['./tool-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolIconComponent implements OnInit {
  @Input() title: string;
  @Input() colour: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
