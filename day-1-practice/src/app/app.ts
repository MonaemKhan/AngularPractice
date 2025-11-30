import { ModalType } from './Class/modal';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hearder } from './component/hearder/hearder';
import { CommonModule } from '@angular/common';
import { ModalService } from './services/shared/modal/modal.service';
import { Modal } from "./component/shared/modal/modal";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hearder, CommonModule, Modal],
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

  constructor(private modalService: ModalService) {}
  protected readonly title = 'day-1-practice';

  ngOnInit() {
    this.modalService.modalState.subscribe(m => this.modal = m);
  }

  closeModal() {
    this.modalService.close();
  }
}
