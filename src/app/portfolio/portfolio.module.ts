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
import {ProjectDetailComponent} from './portfolio-project/project-detail/project-detail.component';
import {ProjectReviewsComponent} from './portfolio-project/project-reviews/project-reviews.component';
import {ProjectRelatedComponent} from './portfolio-project/project-related/project-related.component';
import {ProjectContactComponent} from './portfolio-project/project-contact/project-contact.component';
import {ProjectNavigationComponent} from './portfolio-project/project-navigation/project-navigation.component';

@NgModule({
    declarations: [
      ProjectListComponent,
      PortfolioProjectComponent,
      PortfolioPageComponent,
      ProjectDetailComponent,
      ProjectReviewsComponent,
      ProjectRelatedComponent,
      ProjectContactComponent,
      ProjectNavigationComponent
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
