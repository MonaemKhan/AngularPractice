import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmService } from '../../../services/shared/modal/confirm.service';

@Component({
  selector: 'app-confirm',
  imports: [CommonModule],
  templateUrl: './confirm.html',
  styleUrl: './confirm.scss',
})
export class Confirm {
  @Input() message: string = "";
  @Input() show: boolean = false;
  constructor(private Confirm : ConfirmService){}

  @Output() closeEvent = new EventEmitter<void>();

  Yes() {
    this.Confirm.reslove(true);
  }
  No() {
    this.Confirm.reslove(false);
  }
}
