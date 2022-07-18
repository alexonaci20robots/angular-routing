import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './pages/board/board.component';
import { TicketPreviewComponent } from './pages/board/components/ticket-preview/ticket-preview.component';
import { TicketDetailsComponent } from './pages/ticket-details/ticket-details.component';
import { ProfileComponent } from './profile/profile.component';
import { TimeTrackingComponent } from './pages/ticket-details/components/time-tracking/time-tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TicketPreviewComponent,
    TicketDetailsComponent,
    ProfileComponent,
    TimeTrackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
