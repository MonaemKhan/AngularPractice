import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmService } from '../../../services/shared/modal/confirm.service';
import { ModalType } from '../../../Class/modal';

@Component({
  selector: 'app-confirm',
  imports: [CommonModule],
  templateUrl: './confirm.html',
  styleUrl: './confirm.scss',
})
export class Confirm {
  @Input() message: string = "";
  @Input() show: boolean = false;
  @Input() cancelText: string = "No";
  @Input() confirmText: string = "Yes";
  @Input() type: ModalType = ModalType.Info
  constructor(private Confirm : ConfirmService){}

  Yes() {
    this.Confirm.reslove(true);
  }
  No() {
    this.Confirm.reslove(false);
  }
}
