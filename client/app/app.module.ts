import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { EducationComponent } from './resume/education/education.component';
import { SkillComponent } from './resume/skill/skill.component';
import { LanguageComponent } from './resume/language/language.component';
import { ReferenceComponent } from './resume/reference/reference.component';
import { routes } from './routing';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    SideBarComponent,
    HomeComponent,
    ResumeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    LanguageComponent,
    ReferenceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
