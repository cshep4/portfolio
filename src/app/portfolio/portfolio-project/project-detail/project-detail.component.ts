import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {UserCountService} from '../../../service/user-count-service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: any;
  userCount: any;
  labelIndex = 1;

  constructor(private userCountService: UserCountService) { }

  ngOnInit() {
    if (this.project.userCount) {
      this.userCountService.getUserCount(this.project.userCount).then((res: any) => {
        this.userCount = res.body;
      }, err => {
        this.userCount = 'Could not retrieve user count, please try again';
      });
    }
    if (this.project.userCountUrl) {
      this.userCountService.getUserCountByUrl(this.project.userCountUrl).then((res: any) => {
        this.userCount = res.body;
      }, err => {
        this.userCount = 'Could not retrieve user count, please try again';
      });
    }
  }

  nagivate(url) {
    window.location.href = url;
  }

  getLabelColour(arr, index) {
    let label;
    switch (this.labelIndex) {
      case 1 :
        label = 'label label-green';
        break;
      case 2 :
        label = 'label label-blue';
        break;
      case 3 :
        label = 'label label-yellow';
        break;
      default :
        label = 'label label-red';
        break;
    }

    this.labelIndex++;

    if (this.labelIndex > 4) {
      this.labelIndex = 1;
    }

    // force labels to start at same colour when re-rendering
    if (index === arr.length - 1) {
      this.labelIndex = 1;
    }

    return label;
  }
}
