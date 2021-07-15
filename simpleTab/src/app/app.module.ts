import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewTabComponent } from './view-tab/view-tab.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { CreateViewComponent } from './create-view/create-view.component';
import { EditViewComponent } from './edit-view/edit-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewTabComponent,
    NavigationHeaderComponent,
    HomeViewComponent,
    CreateViewComponent,
    EditViewComponent
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
