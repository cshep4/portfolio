import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppNavbarComponent implements OnInit {
  sectionScroll: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.doScroll();
      this.sectionScroll = null;
    });
  }

  internalRoute(page, dst) {
    this.sectionScroll = dst;
    this.router.navigate([page], {fragment: dst});
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
