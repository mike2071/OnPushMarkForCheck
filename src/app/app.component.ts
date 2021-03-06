import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ObservableWithService';

  time = Date.now();
  mySubject = new Subject<any>();

  constructor(private appService: AppService) {

  }
  ngOnInit() {
    this.appService.myEventEmitter.subscribe(x => {
      console.log('New Data...', x);
      this.time = x;

      this.mySubject.next(x);
    });
  }

  getData() {
    console.log('Fetching data...');
    this.appService.myServiceFunction();
  }

  complete() {
    console.log('Completed');
    this.appService.myEventEmitter.complete();
  }
}
