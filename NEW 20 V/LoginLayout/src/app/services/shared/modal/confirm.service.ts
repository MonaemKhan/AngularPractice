import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalType } from '../../../Class/modal';

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {
  private resolver:((value:boolean)=> void) | null = null;

  confrimState = new BehaviorSubject({
    show : false,
    message : "",
    cancelText: "",
    confirmText: "",
    type: ModalType.Info
  });

  reslove(result:boolean){
    if (this.resolver) {
      this.resolver(result);
      this.resolver = null;
    }

    this.confrimState.next({
      ...this.confrimState.value,
      show: false
    });
  }

  confirm(message:string,cancelText:string = "No",confirmText:string = "Yes",type:ModalType = ModalType.Info):Promise<boolean>{
    return new Promise(reslove=>{
      this.resolver = reslove;
      this.confrimState.next({
        show : true,
        message,
        cancelText,
        confirmText,
        type
      });
    });
  }
}
