import { Injectable, Input, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationSharedServiceService {
  @Output() fire: EventEmitter<any> = new EventEmitter();

  constructor() { }

  change() {
    this.fire.emit(true);
  }

  getEmittedValue() {
    return this.fire;
  }
}
