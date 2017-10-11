import {Component,Input,Output,EventEmitter} from '@angular/core'
import {IEvent} from './shared/index'
@Component({
   selector:'event-thumbnail',
   template: `
   <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div [ngClass]="{green: event?.time === '8:00 am' , bold: event?.time === '8:00 am' }">Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price:{{event.price}} \$ </div>
        <div>
            <span>Location: {{event.location.adresse}}</span>
            <span class="pad-left">{{event.location.city}},{{event.location.country}}</span>
        </div>

   </div>
   `
   ,
   styles: [`
       .green { color: #003300 !important;}
       .pad-left{margin-left: 10px;}
       .well div {color: #222;}
       .bold {font-weight:bold ;}
   `]
})
export class EventThumbnailComponent{
  @Input()    event:IEvent;
  @Output()   eventClick = new EventEmitter();


}
