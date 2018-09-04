import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';
import {ProfileComponent} from './profile/profile.component';
import {InterestsComponent} from './interests/interests.component';
import {ExperienceComponent} from './experience/experience.component';
import {EducationComponent} from './education/education.component';
import {ReferencesComponent} from './references/references.component';
import {ClientComponent} from './client/client.component';
import {PricingComponent} from './pricing/pricing.component';
import {ContactComponent} from './contact/contact.component';
import {PortfolioTemplateComponent} from './portfolio-template/portfolio-template.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {SkillComponent} from './skill/skill.component';
import {SkillRowComponent} from './skill-row/skill-row.component';
import {InViewportModule} from 'ng-in-viewport';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
    declarations: [
      HomeComponent,
      AboutComponent,
      SkillsComponent,
      SkillRowComponent,
      SkillComponent,
      ProfileComponent,
      PortfolioTemplateComponent,
      InterestsComponent,
      ExperienceComponent,
      EducationComponent,
      PortfolioComponent,
      ReferencesComponent,
      ClientComponent,
      PricingComponent,
      ContactComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        InViewportModule,
        AngularFontAwesomeModule
    ]
})
export class HomeModule {

}
