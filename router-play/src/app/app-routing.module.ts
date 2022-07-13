import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { ProfileComponent } from './profile/profile.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

const routes: Routes = [
  { path: 'board', component: BoardComponent },
  { path: 'board/:ticketId', component: TicketDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'board', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
