import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeComponent } from './resume.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { LanguageComponent } from './language/language.component';
import { ReferenceComponent } from './reference/reference.component';


const routes: Routes = [
  { path: '', component: ResumeComponent }
]

@NgModule({
  declarations: [
    ResumeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    LanguageComponent,
    ReferenceComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [],
})

export class ResumeModule { }