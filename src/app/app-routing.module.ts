import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DheaderComponent } from './dashboard/dheader/dheader.component';
import { PageoneComponent } from './dashboard/pageone/pageone.component';

import { PagetwoComponent } from './dashboard/pagetwo/pagetwo.component';
import { PagethreeComponent } from './dashboard/pagethree/pagethree.component';
const routes: Routes = [

  { path: 'dheader', component: DheaderComponent,

  children:[  { path: 'pageone', component: PageoneComponent },
  { path: 'pagetwo', component: PagetwoComponent },
  { path: 'pagethree', component: PagethreeComponent }],


}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
