import { Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
export const routes: Routes = [
    { path : 'home', component: HomeComponent },
    { path : 'blog', component: BlogComponent },
    { path : '**', redirectTo: '/home', pathMatch: 'full'}
]