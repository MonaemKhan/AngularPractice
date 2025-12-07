import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { Hearder } from '../../component/LayoutComponent/hearder/hearder';
import { Sidebar } from '../../component/LayoutComponent/sidebar/sidebar';
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
