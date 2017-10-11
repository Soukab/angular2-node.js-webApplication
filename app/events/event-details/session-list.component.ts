import {Component,Input,OnChanges} from '@angular/core'
import {ISession} from '../shared/index'
@Component({
    selector:'session-list',
    templateUrl:'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges{
  @Input() sessions:ISession[];
  @Input() filterBy:string;
  @Input() sortBy:string;
  visibleSessions:ISession[]=[];
  ngOnChanges(){
    if(this.sessions){
       this.filterSessions(this.filterBy);
       this.sortByDate(this.sortBy);
    }
  }
  filterSessions(filter){
      if(filter === 'all'){
        this.visibleSessions=this.sessions.slice(0);
      }
  }
  sortByDate(dt){
    if(dt==='date'){
        this.visibleSessions.sort(sortBydt);
    }
  }
  }
function sortBydt(s1:ISession, s2:ISession){
   if(s1.date.getTime()>s2.date.getTime()) return 1
   else if(s1.date.getTime()===s2.date.getTime()) return 0
   else return -1
}
