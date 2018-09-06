import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {InViewportModule} from 'ng-in-viewport';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {PortfolioPageComponent} from './portfolio.component';
import {ProjectListComponent} from './portfolio-list/project-list.component';

@NgModule({
    declarations: [
      ProjectListComponent,
      PortfolioPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        InViewportModule,
        AngularFontAwesomeModule
    ]
})
export class PortfolioModule {

}
