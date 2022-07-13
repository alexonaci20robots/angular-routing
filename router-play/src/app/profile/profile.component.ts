import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
  }

}
