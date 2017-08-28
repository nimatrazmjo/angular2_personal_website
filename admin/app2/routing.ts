import { Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, children: [
        { path: 'contact', component: ContactComponent },
        { path: 'resume', loadChildren: './resume/resume.module#ResumeModule' },
        { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
        { path: '**', redirectTo: 'resume', pathMatch: 'full' }
    ]},
    { path: 'login', loadChildren: 'app2/login/login.module#LoginModule' }
    
];
