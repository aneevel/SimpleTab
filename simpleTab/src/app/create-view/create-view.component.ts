import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigationSharedService } from '../navigation-shared.service';

@Component({
  selector: 'app-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.scss']
})
export class CreateViewComponent implements OnInit {

  createTabForm: FormGroup;
  navService: NavigationSharedService;

  constructor(
    private formBuilder: FormBuilder,
    private navigationSharedService: NavigationSharedService
  ) {
    this.createTabForm = this.formBuilder.group({
      title: null,
      artist: null,
      transcriber: null,
      bpm: ['', Validators.pattern("^[0-9]*$")]
    })
    this.navService = navigationSharedService;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.navService.change(4);
  }

}
