import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {VisitorService} from '../../service/visitor-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  private country = 'GB';

  constructor(private visitorService: VisitorService) {
  }

  ngOnInit() {
    this.visitorService.getIpAddress().subscribe(res => {
      const ip = res['ip'];
      this.visitorService.getGEOLocation(ip).subscribe(loc => {
        this.country = loc['country_code2'];
      });
    });
  }

  displayResume(): boolean {
    return this.country === 'US' || this.country === 'CA';
  }
}
