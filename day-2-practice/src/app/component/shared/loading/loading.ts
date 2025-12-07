import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [CommonModule],
  templateUrl: './loading.html',
  styleUrl: './loading.scss',
})
export class Loading {
  @Input() show: boolean = false;
}
