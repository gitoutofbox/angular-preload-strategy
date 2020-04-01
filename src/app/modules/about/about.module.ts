import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { OurDetailsComponent } from './components/our-details/our-details.component';

const routes: Routes = [
  {
    path:'',
    component: OurPartnersComponent
  }
  
];

@NgModule({
  declarations: [OurPartnersComponent, OurDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class AboutModule { }
