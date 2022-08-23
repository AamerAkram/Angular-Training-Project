import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListResolver } from './events/events-list-resolver.service';
import { EventsListComponent } from './events/event-list.components';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './events/nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { SessionListComponent } from './events/event-details/session-list.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { AuthService } from './user/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { EventsResolver } from './events/event.resolver';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    SessionListComponent,
    DurationPipe,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EventService,EventRouteActivator,    EventsListResolver,AuthService,EventsResolver,

    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}

