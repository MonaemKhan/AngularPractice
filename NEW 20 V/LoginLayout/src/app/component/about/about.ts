import { Confirm } from './../shared/confirm/confirm';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ModalService } from '../../services/shared/modal/modal.service';
import { ModalType } from '../../Class/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmService } from '../../services/shared/modal/confirm.service';
import { routerData } from '../../Class/routeDetails';
import { HeaderService } from '../../services/header/header.service';
import { ChildComponent } from "../child.component/child.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})

export class About implements OnInit {
  selectValue:ModalType = ModalType.Success;
  message:string = "";
  values: any = ModalType;
  result:string = "";
  isShow: boolean = false;

  parentCount:number = 0;

  route_data!: routerData[];

  ngOnInit(): void {
    this.route_data = this.headerService.getrouteData();
  }

  constructor(private modal : ModalService,
    private Confirm : ConfirmService,
    private headerService : HeaderService
  ) {}

  btnClick(){
    this.modal.open('Modal',this.message,this.selectValue);
  }

  async btnDel(){
    let res  = await this.Confirm.confirm("Are You Sure");
    this.isShow = true;
    if(res){
      this.result = 'Confirm Delete';
    }else{
      this.result = 'Not Sure';
    }
  }

  btnCounter_click(){
    this.parentCount = this.parentCount + 1 ;
  }

  onReturnCounter(value:number){
    this.parentCount = value;
  }
}
