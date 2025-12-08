import { routeOutlate } from '../../../Class/routeDetails';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/sidebar/sidebar.service';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-right',
  imports: [CommonModule, FormsModule],
  templateUrl: './SidebarRight.html',
  styleUrl: './SidebarRight.scss',
})
export class SidebarRight implements OnInit {
  count: number = 0;
  routeOutlateData!: routeOutlate[];
  constructor(
    private sideBar: SidebarService,
    private route: Router
  ) { }
  ngOnInit(): void {
    this.routeOutlateData = this.sideBar.getRouteOutlateData();
  }
  @Input() show: boolean = false;

  async navManu(value: string) {
    if (this.sideBar.statusRight()) {
      await this.sideBar.actionRight();
    }
  }

  closeSidebar() {
    if (this.sideBar.statusRight()) {
      this.sideBar.actionRight();
    }
  }
}
