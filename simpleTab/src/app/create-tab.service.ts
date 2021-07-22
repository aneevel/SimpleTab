import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Tab } from './tab';
import Vex from "vexflow";

@Injectable({
  providedIn: 'root'
})

export class CreateTabService {

  constructor() { 
  }

  createTab(form: FormGroup) : Tab {
    return new Tab(
      [],
      [ new Vex.Flow.TabStave(10, 40, 400)],
      form.controls.title.value,
      form.controls.artist.value,
      form.controls.transcriber.value,
      form.controls.bpm.value
    );
  }
}
