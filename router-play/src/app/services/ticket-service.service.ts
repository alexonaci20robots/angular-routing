import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket-model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private tickets: Ticket[] = [{
    id: '1',
    title: 'first ticket',
    description: 'descriptions'
  },{
    id: '2',
    title: 'second ticket',
    description: 'descriptions'
  },{
    id: '3',
    title: 'third ticket',
    description: 'descriptions'
  },{
    id: '4',
    title: '4 ticket',
    description: 'descriptions'
  },{
    id: '5',
    title: '5 ticket',
    description: 'descriptions'
  },];

  public getTickets(): Ticket[] {
    return this.tickets;
  }

  public getTicketById(id: string): Ticket | undefined {
    return this.tickets.find((ticket) => {
      if (ticket.id === id) {
        return ticket;
      }
      return null;
    })
  }
}
