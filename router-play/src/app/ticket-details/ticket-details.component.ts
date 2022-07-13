import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../models/ticket-model';
import { TicketService } from '../services/ticket-service.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {

  public ticket: Ticket | undefined;

  constructor(private activatedRoute: ActivatedRoute,
    private ticketService: TicketService) { }

  ngOnInit(): void {
    // SUBSCRIBE ii asincron
    this.activatedRoute.params.subscribe((params) => {
      const ticketId = params['ticketId'];
      this.ticket = this.ticketService.getTicketById(ticketId);
    });
  }

}
