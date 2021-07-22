import { Component, OnInit } from '@angular/core';
import { CurrentTabService } from '../current-tab.service';
import { Tab } from '../tab';
import Vex from "vexflow";

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {

  VF = Vex.Flow;
  vexRenderer?: Vex.Flow.Renderer;
  system?: Vex.Flow.System;
  currentTabService: CurrentTabService;
  currentTab: any;
  display?: HTMLElement;

  constructor(currentTabService: CurrentTabService) {
    this.currentTabService = currentTabService;

    }

  ngOnInit(): void {

    if (this.hasCurrentTab()) {

      this.currentTab = this.currentTabService.getTab();
      this.createDisplay();
    }

  }

  hasCurrentTab(): boolean {
    return (this.currentTabService.getTab() != null)
  }

  createDisplay() {
    this.display = document.getElementById("canvas")!;

    this.vexRenderer = new this.VF.Renderer(this.display, this.VF.Renderer.Backends.SVG)!;

  }

}
