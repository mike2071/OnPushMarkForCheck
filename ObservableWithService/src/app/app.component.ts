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
      this.time = x;
    })
  }

  myFunction(){
    console.log("Clicked Button")
    this.appService.myServiceFunction();
  }
}
