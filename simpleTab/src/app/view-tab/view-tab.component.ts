import { Component, OnInit } from '@angular/core';
import Vex from 'vexflow';

@Component({
  selector: 'app-view-tab',
  templateUrl: './view-tab.component.html',
  styleUrls: ['./view-tab.component.scss']
})
export class ViewTabComponent implements OnInit {

  VF = Vex.Flow;
  vexRenderer = this.VF.Renderer;


  constructor() { }

  ngOnInit(): void {
    let display = document.getElementById("canvas")!;
    this.vexRenderer = new this.VF.Renderer(display, this.VF.Renderer.Backends.SVG);

  }

}
