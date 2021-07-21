import { Injectable } from '@angular/core';
import { Tab } from './tab';

@Injectable({
  providedIn: 'root'
})
export class CurrentTabService {

  tab: Tab;

  constructor() {
    this.tab = new Tab(
      [], [], "", "", "", 0
    ); 
   }

   setTab(tab: Tab) {
     this.tab = tab;
   }

   getTab(): Tab {
     return this.tab;
   }
}
