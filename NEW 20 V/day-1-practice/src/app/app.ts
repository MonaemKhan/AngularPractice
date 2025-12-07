import { ModalType } from './Class/modal';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalService } from './services/shared/modal/modal.service';
import { Modal } from "./component/shared/modal/modal";
import { ConfirmService } from './services/shared/modal/confirm.service';
import { Confirm } from "./component/shared/confirm/confirm";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Modal, Confirm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  modal = {
    show: false,
    title: '',
    message: '',
    type: ModalType.Success
  };

  confirm = {
    show: false,
    message: ''
  }

  constructor(private modalService: ModalService,
              private confirmService : ConfirmService
  ) {}
  protected readonly title = 'day-1-practice';

  ngOnInit() {
    this.modalService.modalState.subscribe(m => this.modal = m);
    this.confirmService.confrimState.subscribe(m=>this.confirm = m)
  }

  closeModal() {
    this.modalService.close();
  }
}
