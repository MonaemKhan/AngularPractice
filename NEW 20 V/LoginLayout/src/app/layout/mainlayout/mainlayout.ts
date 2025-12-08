import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { Hearder } from '../../component/LayoutComponent/hearder/hearder';
import { Sidebar } from '../../component/LayoutComponent/sidebar/sidebar';
import { SidebarRight } from "../../component/LayoutComponent/sidebarRight/SidebarRight";
@Component({
  selector: 'app-mainlayout',
  imports: [RouterOutlet, Hearder, CommonModule, Sidebar, SidebarRight],
  templateUrl: './mainlayout.html',
  styleUrl: './mainlayout.scss',
})
export class Mainlayout {

  SidebarShow = {
    show: false
  }

  SidebarRightShow = {
    show: false
  }

  RouteTitle = {
    Route_title: ""
  }

  constructor(
    private sidebarService: SidebarService
  ) { }
  protected readonly title = 'Login';

  ngOnInit() {
    this.sidebarService.sidebarstate.subscribe(m => this.SidebarShow = m);
    this.sidebarService.sidebarRightstate.subscribe(m => this.SidebarRightShow = m);
    this.sidebarService.routeTitleState.subscribe(m => this.RouteTitle = m);
  }

  hideMenu() {
    if (this.sidebarService.status()) {
      this.sidebarService.action();
    }
    if (this.sidebarService.statusRight()) {
      this.sidebarService.actionRight();
    }
  }
}
