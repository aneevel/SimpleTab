import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateTabService } from '../create-tab.service';
import { NavigationSharedService } from '../navigation-shared.service';

@Component({
  selector: 'app-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.scss']
})
export class CreateViewComponent implements OnInit {

  createTabForm: FormGroup;
  navigationSharedService: NavigationSharedService;
  createTabService: CreateTabService;

  constructor(
    private formBuilder: FormBuilder,
    navigationSharedService: NavigationSharedService,
    createTabService: CreateTabService
  ) {
    this.createTabForm = this.formBuilder.group({
      title: null,
      artist: null,
      transcriber: null,
      bpm: ['', Validators.pattern("^[0-9]*$")]
    })
    this.navigationSharedService = navigationSharedService;
    this.createTabService = createTabService;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.navigationSharedService.change(4);
  }

}
