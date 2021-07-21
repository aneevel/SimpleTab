import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { table } from 'console';

import { Tab } from './tab';

@Injectable({
  providedIn: 'root'
})
export class CreateTabService {

  constructor() { 
  }

  createTab(form: FormGroup) : Tab {
    return new Tab(
      [],
      [],
      form.controls.title.value,
      form.controls.artist.value,
      form.controls.transcriber.value,
      form.controls.bpm.value
    );
  }
}
