import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {
  private resolver:((value:boolean)=> void) | null = null;

  confrimState = new BehaviorSubject({
    show : false,
    message : ""
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

  confirm(message:string):Promise<boolean>{
    return new Promise(reslove=>{
      this.resolver = reslove;
      this.confrimState.next({
        show : true,
        message
      });
    });
  }
}
