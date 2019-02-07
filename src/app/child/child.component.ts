import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() addItemStream: Subject<any>;
  time = Date.now();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.addItemStream.subscribe(x => {
      this.time = x;

      // this.cd.markForCheck();
    });
  }

}
