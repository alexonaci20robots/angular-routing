import { Component, HostBinding, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TrackingOperation } from 'src/app/models/ticket-model';

// dumb component / presentation component
@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.scss']
})
export class TimeTrackingComponent {

  @Input() ticketTitle: string | undefined = '';
  @Output() trackingEvent = new EventEmitter<string>();

  increment() {
    this.trackingEvent.emit(TrackingOperation.INCREMENT);
  }

  decrement() {
    this.trackingEvent.emit(TrackingOperation.DECREMENT);
  }
}
