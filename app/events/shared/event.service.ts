import {Injectable,EventEmitter} from '@angular/core'
import {IEvent,ISession} from './event.model'
import {Subject,Observable} from 'rxjs/RX'
import {Http,Response,Headers,RequestOptions} from '@angular/http'
@Injectable()
export class EventService{
   constructor(private http:Http){

   }
   getEvents():Observable<IEvent[]>{
      return this.http.get("/api/events").map((response:Response)=>{
          return <IEvent[]> response.json();
      }).catch(this.handleError);
   }
   getEvent(id:number):Observable<IEvent>{
       return this.http.get("/api/events/"+ id).map((response:Response)=>{
           return <IEvent> response.json();
       }).catch(this.handleError);
   }
   updateEvent(id:number,session:ISession):Observable<IEvent>{
   var la;
   console.log('dkheel hnaa mok');
   let headers=new Headers({'Content-Type':'application/json'});
   let options=new RequestOptions({headers:headers});
   return this.http.post("/api/events/saveSession/"+id,JSON.stringify(session),options).map((response:Response)=>{
        la=response.json();
        console.log('lalalala ',la);
        return la;
   }).catch(this.handleError);
   }
   searchSessions(searchTerm:string){
       return this.http.get("/api/sessions/search?search="+searchTerm).map((response:Response)=>{
           return response.json();
       }).catch(this.handleError);
   }
   private handleError(error:Response){
     return Observable.throw(error.statusText);
   }
}
