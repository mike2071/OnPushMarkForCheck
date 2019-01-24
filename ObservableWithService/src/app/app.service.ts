import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  myEventEmitter = new EventEmitter();

  constructor() { }

  myServiceFunction() {
    setInterval(x => {
      this.myEventEmitter.emit(Date.now());
    }, 2000);
  }

  resetEventEmmitter() {
      this.myEventEmitter = new EventEmitter();
  }
}
