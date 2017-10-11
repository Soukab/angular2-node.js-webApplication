import {Component,OnInit} from '@angular/core'
import {EventService} from './shared/event.service'
import {ActivatedRoute} from '@angular/router'
import {IEvent} from './shared/index'
@Component({
template:`
<div>


  <div class="row">
        <div class="col-md-6">
            <h5>Bienvenue à</h5>
            <h3 class="rs">Ramsa</h3>
            <h6>Régie Autonome Multi Services d'Agadir</h6>
        </div>
        <div class="col-md-6" >
           <img src="/app/assets/images/ramsa.png"  class="event-image">
        </div>
  </div>

  <hr/>
  <div  *ngFor="let event1 of events" class="col-md-5">
     <event-thumbnail  [event]="event1"></event-thumbnail>
  </div>
</div>
`,
styles:[`
     .container {padding-left:20ps; padding-right:20px;}
     .event-image {height: 150px;width: 500px;}
     .rs {color: #0d47a1;font-weight:bold ;}
`]
})
export class EventsListComponent implements OnInit{
  events:IEvent[];
  constructor (private eventService: EventService,private route:ActivatedRoute){
  }
  ngOnInit(){
       this.events=this.route.snapshot.data['events']
  }

}
