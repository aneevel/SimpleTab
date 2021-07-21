import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {

  activeId: number = 1; 

  constructor() { }

  ngOnInit(): void {
  }

}
