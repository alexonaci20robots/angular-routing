import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket-model';
import { TicketService } from '../services/ticket-service.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public myTickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {
  }

  // ngOnInit pentru stiuatii cand vrem sa facem ceva inainte sa ni se randeze html-ul -> cand se initializeaza componenta
  ngOnInit(): void {
    this.myTickets = this.ticketService.getTickets();
  }

}
