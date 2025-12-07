import { Component } from '@angular/core';
import { ModalType } from '../../Class/modal';
import { ModalService } from '../../services/shared/modal/modal.service';
import { ConfirmService } from '../../services/shared/modal/confirm.service';
import { RouterOutlet } from '@angular/router';
import { Hearder } from '../../component/hearder/hearder';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainlayout',
  imports: [RouterOutlet, Hearder, CommonModule],
  templateUrl: './mainlayout.html',
  styleUrl: './mainlayout.scss',
})
export class Mainlayout {
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
