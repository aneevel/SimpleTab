import { Component, OnInit } from '@angular/core';
import { CurrentTabService } from '../current-tab.service';
import Vex from "vexflow";

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {

  VF = Vex.Flow;
  vexRenderer: any;
  system: any;
  currentTabService: CurrentTabService;
  currentTab: any;

  constructor(currentTabService: CurrentTabService) {
    this.currentTabService = currentTabService;
   }

  ngOnInit(): void {

    if (this.hasCurrentTab()) {

      this.currentTab = this.currentTabService.getTab();
      let display = document.getElementById("canvas")!;
      this.vexRenderer = new this.VF.Renderer(display, this.VF.Renderer.Backends.SVG);

      this.vexRenderer.resize(600, 600);
      const context = this.vexRenderer.getContext();

      this.VF.Formatter.FormatAndDraw(context, this.currentTab.staves[0], this.currentTab.notes);
    }

  }

  hasCurrentTab(): boolean {
    return (this.currentTabService.getTab() != null)
  }

}
