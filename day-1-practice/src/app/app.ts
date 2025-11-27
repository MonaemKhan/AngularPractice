import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hearder } from './component/hearder/hearder';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Hearder,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = 'day-1-practice';
}
