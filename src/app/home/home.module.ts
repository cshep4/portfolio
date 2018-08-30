import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';
import {ProfileComponent} from './profile/profile.component';
import {PortfolioComponent} from './portfolio/portfolio.component';

@NgModule({
    declarations: [
      HomeComponent,
      AboutComponent,
      SkillsComponent,
      ProfileComponent,
      PortfolioComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class HomeModule {

}
