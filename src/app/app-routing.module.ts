import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component'

const routes: Routes = [
  
  { path: 'list', component: BlogListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', component: BlogListComponent },  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
   exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
