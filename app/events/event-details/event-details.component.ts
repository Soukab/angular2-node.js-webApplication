import {Component,OnInit} from '@angular/core'
import {EventService} from '../shared/event.service'
import {ActivatedRoute,Params} from '@angular/router'
import {IEvent,ISession} from '../shared/index'
import {AuthService} from '../../user/auth.service'
import {IUser} from '../../user/user.model'
import {Observable} from 'rxjs/RX'
import {Http,Response} from '@angular/http'

@Component({
templateUrl:
   '/app/events/event-details/event-details.component.html',
    styles:[`
         .container {padding-left:20ps; padding-right:20px;}
         .event-image {height: 100px;}
         a {cursor:pointer}
    `]
})
export class EventDetailsComponent implements OnInit{
event:IEvent;
addMode:boolean;
boss:boolean=false;
filterBy: string ='all';
sortBy: string;
user:IUser;
      constructor(private eventService:EventService,private route:ActivatedRoute,private auth:AuthService,private http:Http){

      }
      ngOnInit(){
                this.route.data.forEach((data)=>{
                this.event=data['event'];
                this.addMode=false;

         })
         this.user=this.auth.currentUser;
         if(this.user!=undefined){
            if(this.user.id===111){
                console.log("hahowaa");
                this.boss=true;
            }
         }

      }
      addSession(){
         this.addMode = true;
      }
      saveNewSession(session:ISession){
         console.log('event fin zad ',this.event.id);
         console.log('dakchi li zad ',session);
         this.eventService.updateEvent(this.event.id,session).subscribe(event=>{
           this.addMode=false;
         });

      }
}
