import { routeOutlate } from './../../../Class/routeDetails';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/sidebar/sidebar.service';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  count:number = 0;
  routeOutlateData!:routeOutlate[];
  constructor(
    private sideBar : SidebarService,
    private route : Router
  ){}
  ngOnInit(): void {
    console.log('side BAR show '+ ++this.count);
    this.routeOutlateData = this.sideBar.getRouteOutlateData();
  }
  @Input() show: boolean = false;

  async navManu(value:string){
    if (this.sideBar.status()) {
      await this.sideBar.action();
    }
    this.route.navigate([value]);
  }
}
