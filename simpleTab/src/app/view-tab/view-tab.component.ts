import { Component, OnInit } from '@angular/core';
import Vex from 'vexflow';
import { CurrentTabService } from '../current-tab.service';

@Component({
  selector: 'app-view-tab',
  templateUrl: './view-tab.component.html',
  styleUrls: ['./view-tab.component.scss']
})
export class ViewTabComponent implements OnInit {

  VF = Vex.Flow;
  vexRenderer: any;
  system: any;
  currentTabService: CurrentTabService;

  constructor(currentTabService: CurrentTabService) {
    this.currentTabService = currentTabService;
   }

  ngOnInit(): void {

    if (this.hasCurrentTab()) {
      let display = document.getElementById("canvas")!;
      this.vexRenderer = new this.VF.Renderer(display, this.VF.Renderer.Backends.SVG);

      this.vexRenderer.resize(600, 600);
      const context = this.vexRenderer.getContext();
    }

  }

  hasCurrentTab(): boolean {
    return (this.currentTabService.getTab() != null)
  }
}
