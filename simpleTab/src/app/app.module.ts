import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewTabComponent } from './view-tab/view-tab.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewTabComponent,
    NavigationHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
