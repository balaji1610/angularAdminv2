import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './frontpage/header/header.component';
import { LoginformComponent } from './frontpage/loginform/loginform.component';

import { AppRoutingModule } from './app-routing.module';
import { DheaderComponent } from './dashboard/dheader/dheader.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { PageoneComponent } from './dashboard/pageone/pageone.component';
import { PagetwoComponent } from './dashboard/pagetwo/pagetwo.component';
import { PagethreeComponent } from './dashboard/pagethree/pagethree.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    DheaderComponent,
    SidenavComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
