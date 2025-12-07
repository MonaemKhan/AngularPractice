import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { routerData } from '../../../Class/routeDetails';
import { LoadingService } from '../../../services/loading/loading.service';
import { SidebarService } from '../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.html',
  styleUrl: './hearder.scss',
  imports: [CommonModule]
})
export class Hearder implements OnInit {

  isSidebarOpen : boolean = false;

  header_arr: string[] = ["M", "O", "N", "A", "E", "M", " "];
  header_title: string = this.header_arr[0];
  index = 0;

  route_data!: routerData[];
  constructor(
    private loadingService: LoadingService,
    private sidebarservice: SidebarService
  ) { }
  ngOnInit(): void {
    this.typewriteWord();
  }

  typewriteWord() {
    let i = 1;

    const interval = setInterval(() => {
      this.header_title += this.header_arr[i];
      i++;

      if (i === this.header_arr.length) {
        i = 1;
        this.header_title = this.header_arr[0]; // clear the text
      }

    }, 500); // speed
  }

  exploreButtonClick(){
    this.sidebarservice.action();
  }
}
