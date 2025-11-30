import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalType } from '../../../Class/modal';

@Injectable({ providedIn: 'root' })
export class ModalService {

  modalState = new BehaviorSubject({
    show: false,
    title: '',
    message: '',
    type: ModalType.Success
  });

  open(title: string, msg: string, type: ModalType) {
    this.modalState.next({
      show: true,
      title,
      message: msg,
      type
    });
  }

  close() {
    this.modalState.next({
      ...this.modalState.value,
      show: false
    });
  }

}
