import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { DetailsComponent } from './details/details.component';

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'detail', component: DetailsComponent }
];


@NgModule({
  declarations: [
    BlogComponent,
    DetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  providers:[],
})
export class BlogModule {}