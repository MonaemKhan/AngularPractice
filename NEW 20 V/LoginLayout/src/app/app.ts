import { ModalType } from './Class/modal';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalService } from './services/shared/modal/modal.service';
import { Modal } from "./component/shared/modal/modal";
import { ConfirmService } from './services/shared/modal/confirm.service';
import { Confirm } from "./component/shared/confirm/confirm";
import { Loading } from "./component/shared/loading/loading";
import { LoadingService } from './services/loading/loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Modal, Confirm, Loading],
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
  loading = {
    show: false
  }

  constructor(private modalService: ModalService,
              private confirmService : ConfirmService,
              private loadingService : LoadingService
  ) {}

  ngOnInit() {
    this.modalService.modalState.subscribe(m => this.modal = m);
    this.confirmService.confrimState.subscribe(m=>this.confirm = m);
    this.loadingService.LoadingState.subscribe(m=>this.loading = m)
  }

  closeModal() {
    this.modalService.close();
  }
}
