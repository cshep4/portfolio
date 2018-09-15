import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {InViewportModule} from 'ng-in-viewport';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {PortfolioPageComponent} from './portfolio.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {SharedModule} from '../shared.module';
import {PortfolioProjectComponent} from './portfolio-project/portfolio-project.component';
import {OwlModule} from 'ngx-owl-carousel';
import {TooltipModule} from 'ngx-bootstrap';

@NgModule({
    declarations: [
      ProjectListComponent,
      PortfolioProjectComponent,
      PortfolioPageComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      InViewportModule,
      AngularFontAwesomeModule,
      OwlModule,
      TooltipModule.forRoot(),
      SharedModule
    ]
})
export class PortfolioModule {

}
