import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: BlogComponent },
];


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  providers:[],
})
export class BlogModule {}