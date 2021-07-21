import { Injectable, Input, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationSharedService {
  @Output() fire: EventEmitter<any> = new EventEmitter();

  constructor() { }

  change(id: number) {
    this.fire.emit(id);
  }

  getEmittedValue() {
    return this.fire;
  }
}
