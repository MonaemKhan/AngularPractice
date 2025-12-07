import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalType } from '../../../Class/modal';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  @Input() title: string = "";
  @Input() message: string = "";
  @Input() type: ModalType = ModalType.Success;
  @Input() show: boolean = false;

  @Output() closeEvent = new EventEmitter<void>();

  close() {
    this.show = false;
    this.closeEvent.emit();
  }
}
