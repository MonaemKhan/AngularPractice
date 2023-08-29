import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() FullName = '';
  @Output() newAdd = new EventEmitter();
  Add() {
    this.newAdd.emit({price:10,Quentity:1})
  }
}
