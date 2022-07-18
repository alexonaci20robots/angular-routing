import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket, TrackingOperation } from '../../models/ticket-model';
import { TicketService } from '../../services/ticket-service.service';

// smart component / container component
@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {

  ticket: Ticket | undefined;
  trackedHours: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private ticketService: TicketService) { }

  ngOnInit(): void {
    // SUBSCRIBE ii asincron
    this.activatedRoute.params.subscribe((params) => {
      const ticketId = params['ticketId'];
      this.ticket = this.ticketService.getTicketById(ticketId);
    });
  }

  handleTracking(trackingEvent: string) {
    if (trackingEvent === TrackingOperation.INCREMENT) {
      this.trackedHours++;
    }
    if (trackingEvent === TrackingOperation.DECREMENT && this.trackedHours > 0) {
      this.trackedHours--;
    }
  }

}
