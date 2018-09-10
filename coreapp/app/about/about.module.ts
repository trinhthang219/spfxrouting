import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutParentComponent } from './about-parent/about-parent.component';
import { AboutChildComponent } from './about-child/about-child.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: AboutParentComponent },
  { path: 'loadchild', component: AboutChildComponent },
  { path: 'about', component: AboutChildComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutParentComponent, AboutChildComponent]
})
export class AboutModule { }
