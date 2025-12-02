import { Confirm } from './../shared/confirm/confirm';
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/shared/modal/modal.service';
import { ModalType } from '../../Class/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmService } from '../../services/shared/modal/confirm.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  selectValue:ModalType = ModalType.Success;
  message:string = "";
  values: any = ModalType;
  result:string = "";
  ngOnInit(): void {

  }
  constructor(private modal : ModalService,
    private Confirm : ConfirmService
  ) {}

  btnClick(){
    this.modal.open('Modal',this.message,this.selectValue);
  }

  async btnDel(){
    let res  = await this.Confirm.confirm("Are You Sure");
    console.log(res);
    if(res){
      this.result = 'Confirm Delete';
    }else{
      this.result = 'Not Sure';
    }
  }
}
