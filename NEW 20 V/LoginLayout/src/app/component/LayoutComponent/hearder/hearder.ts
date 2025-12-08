import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { routerData } from '../../../Class/routeDetails';
import { SidebarService } from '../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.html',
  styleUrl: './hearder.scss',
  imports: [CommonModule]
})
export class Hearder implements OnInit {

  showUserMenu:boolean = false;
  isSidebarOpen: boolean = false;
  header_title: string = "MONAEM";
  @Input() Route_title: string = "";
  index = 0;

  route_data!: routerData[];

  constructor(
    private sidebarservice: SidebarService,
  ) { }

  ngOnInit(): void {
  }

  exploreButtonClick() {
    this.sidebarservice.action();
  }

  toggleUserMenu() {
    this.sidebarservice.actionRight();
    this.showUserMenu = !this.showUserMenu;
  }
}
