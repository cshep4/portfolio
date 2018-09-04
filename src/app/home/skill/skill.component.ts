import {AfterViewInit, Component, Input, ViewEncapsulation} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillComponent implements AfterViewInit {
  @Input() skillCat: any;

  constructor() { }

  ngAfterViewInit() {
  }

  public onViewportChange({ target, visible }: { target: Element; visible: boolean }, percent) {
    if (visible) {
      this.animate(target, percent);
    }
  }

  private animate(element, percent) {
      const $that = $(this);
      $(element).find('span').animate({
        'width': percent + '%'
      }, 1600, function () {
      });
      $(element).find('.bar-wrap strong').animate({
        'opacity': 1
      }, 1400);
      if (percent === '100') {
        $(element).find('bar-wrap strong').addClass('full');
      }
  }
}
