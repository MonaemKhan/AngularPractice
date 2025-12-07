import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childComponent',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if(this.count === 15){
      this.randomData = "Bingo, click 15 time";
      Promise.resolve().then(() => {
        this.returnCounter.emit(0);
      });
    }
  }
  @Input() count!: number;
  @Output() returnCounter = new EventEmitter<number>();
  randomData:string = "";
}
