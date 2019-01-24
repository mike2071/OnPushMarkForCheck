import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ObservableWithService';
  time: Date;

  constructor(private appService: AppService) {

  }
  ngOnInit() {
    this.appService.myEventEmitter.subscribe(x => {
    console.log("New Data...", x)
      this.time = x;
    })
  }

  getData(){
    console.log("Fetching data...")
    this.appService.myServiceFunction();
  }

  stopData(){
    console.log("Stopped")
    this.appService.myEventEmitter.unsubscribe();
    // this.time = Date.now()
    this.appService.resetEventEmmitter()
  }
}
