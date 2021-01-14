import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {VisitorService} from '../service/visitor-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppNavbarComponent implements OnInit {
  sectionScroll: any;
  private country = 'GB';

  constructor(private router: Router, private visitorService: VisitorService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.doScroll();
      this.sectionScroll = null;
    });

    this.visitorService.getIpAddress().subscribe(res => {
      const ip = res['ip'];
      this.visitorService.getGEOLocation(ip).subscribe(loc => {
        this.country = loc['country_code2'];
      });
    });
  }

  internalRoute(page, dst) {
    this.sectionScroll = dst;
    this.router.navigate([page], {fragment: dst});
  }

  displayResume(): boolean {
    return this.country === 'US' || this.country === 'CA';
  }

  doScroll() {
    if (!this.sectionScroll) {
      return;
    }

    try {
      const elements = document.getElementById(this.sectionScroll);

      elements.scrollIntoView();
    }
    finally {
      this.sectionScroll = null;
    }
  }

  isNotHomePage(): boolean {
    return this.router.url.indexOf('/portfolio') !== -1;
  }
}
