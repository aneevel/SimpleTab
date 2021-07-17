import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.scss']
})
export class CreateViewComponent implements OnInit {

  createTabForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createTabForm = this.formBuilder.group({
      title: null,
      artist: null,
      transcriber: null,
      bpm: ['', Validators.pattern("^[0-9]*$")]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Form submitted!");
  }

}
