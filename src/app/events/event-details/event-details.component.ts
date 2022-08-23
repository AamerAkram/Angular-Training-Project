import { Component,OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from './../shared/event.service';

@Component({
    selector:'event-details',
    templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit{
    event:any;
constructor(private eventService:EventService,private route: ActivatedRoute){

}

ngOnInit(){
    this.event = this.route.snapshot.data['event']
}
}