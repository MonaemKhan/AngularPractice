import { ModalType } from './../../../Class/modal';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {

  modalState = new BehaviorSubject({
    show: false,
    title: '',
    message: '',
    type: ModalType.Success
  });

  getTitle(type:ModalType):string{
    if(ModalType.Success === type){
      return "Success";
    }else if(ModalType.Error === type){
      return "Error";
    }else if(ModalType.Warning){
      return "Warning"
    }else{
      return "Modal Service"
    }
  }

  open(msg: string, type: ModalType) {
    var title = this.getTitle(type);
    this.modalState.next({
      show: true,
      title,
      message: msg,
      type
    });
    const time = setTimeout(()=>{
      this.close();
    },6000);
  }

  openWthTitle(title:string,msg: string, type: ModalType) {
    this.modalState.next({
      show: true,
      title,
      message: msg,
      type
    });
    const time = setTimeout(()=>{
      this.close();
    },6000);
  }

  close() {
    this.modalState.next({
      ...this.modalState.value,
      show: false
    });
  }

}
