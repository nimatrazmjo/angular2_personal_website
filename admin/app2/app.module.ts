import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { routes } from './routing';
import { SDKBrowserModule } from '../../sdk/index';


import { BlogModule } from './blog/blog.module';
import { ResumeModule } from './resume/resume.module';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    ContactComponent,
    //  LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    SDKBrowserModule.forRoot(),
    BlogModule,
    ResumeModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
