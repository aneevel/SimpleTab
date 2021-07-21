import { Component, OnInit } from '@angular/core';
import { NavigationSharedService } from '../navigation-shared.service';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {

  activeId: number = 1; 
  sharedNavService: NavigationSharedService;

  constructor(sharedNavService: NavigationSharedService) {
    this.sharedNavService = sharedNavService;
   }

  ngOnInit(): void {
    this.sharedNavService.getEmittedValue().subscribe(
      value => this.activeId = value
    );
  }

}
