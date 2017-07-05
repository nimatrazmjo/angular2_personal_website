import { Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
    { path: 'resume', loadChildren: './resume/resume.module#ResumeModule' },
    { path: '**', redirectTo: '/home', pathMatch: 'full'},
];
