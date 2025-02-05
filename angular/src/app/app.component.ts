import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { testWorkerWithImport, testWorkerWithoutImport, testWorkerWithLocalImport } from 'worker_package';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_test';
  constructor() {
      testWorkerWithoutImport();
      testWorkerWithLocalImport();
      testWorkerWithImport();
  }
}
