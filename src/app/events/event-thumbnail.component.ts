import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent{
    @Input() event:any
    @Output() eventClicked=new EventEmitter(); // to pass data from parent to child
    
    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return{green:isEarlyStart,bold:isEarlyStart}
    }
    getStartTimeClass2(){
        if(this.event && this.event.time === '8:00 am')
        return 'green bold'
        else
        return ''
    }
    getStartTimeClass3(){
        if(this.event && this.event.time === '8:00 am')
        return ['green', 'bold']
        else
        return []
    }
    getStartTimeStyle():any {
        if (this.event && this.event.time === '8:00 am')
          return {color: 'yellow', 'font-weight': 'bold'}
        return {}
      }

}