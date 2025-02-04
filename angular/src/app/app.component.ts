import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { test as regular_test } from 'regular_worker';
import { test as comlink_test } from 'comlink_worker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_test';
  constructor() {
    regular_test();
    comlink_test();
  }
}
