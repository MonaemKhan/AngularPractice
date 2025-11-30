import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/shared/modal/modal.service';
import { ModalType } from '../../Class/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  ngOnInit(): void {

  }
  constructor(private modal : ModalService) {}

  btnClick(){
    this.modal.open('Modal',this.message,this.selectValue);
  }
}
