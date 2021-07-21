import { Injectable } from '@angular/core';
import { Tab } from './tab';

@Injectable({
  providedIn: 'root'
})
export class CurrentTabService {

  tab: any;

  constructor() {
    this.tab = undefined;
   }

   setTab(tab: Tab) {
     this.tab = tab;
   }

   getTab(): Tab {
     return this.tab;
   }
}
