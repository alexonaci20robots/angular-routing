import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-preview',
  templateUrl: './ticket-preview.component.html',
  styleUrls: ['./ticket-preview.component.scss']
})
export class TicketPreviewComponent {

  @Input() public ticketTitle: string = '';

}
