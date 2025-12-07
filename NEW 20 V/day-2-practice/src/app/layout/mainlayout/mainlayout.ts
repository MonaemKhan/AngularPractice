import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hearder } from '../../component/hearder/hearder';
import { CommonModule } from '@angular/common';
import { Sidebar } from "../../component/sidebar/sidebar";
import { SidebarService } from '../../services/sidebar/sidebar.service';
@Component({
  selector: 'app-mainlayout',
  imports: [RouterOutlet, Hearder, CommonModule, Sidebar],
  templateUrl: './mainlayout.html',
  styleUrl: './mainlayout.scss',
})
export class Mainlayout {

  SidebarShow = {
    show: false
  }

  constructor(
    private sidebarService: SidebarService
  ) { }
  protected readonly title = 'day-2-practice';

  ngOnInit() {
    this.sidebarService.sidebarstate.subscribe(m => this.SidebarShow = m);
  }

  hideMenu() {
    if (this.sidebarService.status()) {
      this.sidebarService.action();
    }
  }
}
