import { NgModule } from '@angular/core';

import {ProjectComponent} from './project/project.component';
import {TooltipModule} from 'ngx-bootstrap';
import {CommonModule} from '@angular/common';

@NgModule({
  exports: [
    ProjectComponent
  ],
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    TooltipModule.forRoot()
  ]
})
export class SharedModule { }
