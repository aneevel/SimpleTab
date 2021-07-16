import { Component, OnInit } from '@angular/core';
import Vex from 'vexflow';

@Component({
  selector: 'app-view-tab',
  templateUrl: './view-tab.component.html',
  styleUrls: ['./view-tab.component.scss']
})
export class ViewTabComponent implements OnInit {

  VF = Vex.Flow;
  vexRenderer: any;
  score: any;
  system: any;
  notes: any;

  constructor() { }

  ngOnInit(): void {
    let display = document.getElementById("canvas")!;
    this.vexRenderer = new this.VF.Renderer(display, this.VF.Renderer.Backends.SVG);

    this.vexRenderer.resize(600, 600);
    const context = this.vexRenderer.getContext();

    this.notes = [
      new this.VF.TabNote({
        positions: [{str: 3, fret: 7}],
        duration: "q"
      }),

      new this.VF.TabNote({
        positions: [{str: 2, fret: 10},
          {str: 3, fret: 9}],
          duration: "q"}).
          addModifier(new this.VF.Bend("Full"), 1),
      
      new this.VF.TabNote({
        positions: [{str: 2, fret: 5}],
        duration: "h"}). 
        addModifier(new this.VF.Vibrato().setHarsh(true).setVibratoWidth(50), 0)
    ];

    const stave = new this.VF.TabStave(10, 40, 400);
    stave.addClef("tab").setContext(context).draw();

    this.VF.Formatter.FormatAndDraw(context, stave, this.notes);

  }

}
