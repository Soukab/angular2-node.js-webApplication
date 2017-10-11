import {Injectable} from '@angular/core'
import {IReclamation} from  './reclamation.model'
import {Subject,Observable} from 'rxjs/RX'
import {Http,Response,Headers,RequestOptions} from '@angular/http'
@Injectable()
export class ReclamationService{
     localite:any;
     constructor(private http:Http){

     }
     currentReclamation:IReclamation;
     usersReclamation:IReclamation[];
     getReclamations(){
          var res;
         return this.http.get("/api/reclamations").map((response:Response)=>{
             res=<IReclamation[]> response.json();
             return res;
         }).catch(this.handleError);
     }
     getLocalites(){
         return this.http.get("/api/localite").map((response:Response)=>{
             this.localite=response.json();
             return this.localite;
         }).catch(this.handleError);
     }
     saveReclamation(event):Observable<IReclamation>{
         console.log('kifaaaach',event.etat);
         var newReclamation: IReclamation={
               id:undefined,
               numDossier:event.numDossier,
               titre:event.titre,
               date:new Date(event.date),
               type:event.type,
               description:event.description,
               selectedLocalite:parseInt(event.selectedLocalite),
               etat:"1",
               affectation:event.affectation,
               rapport:event.rapport
         }
         console.log('awaa ziiiiid',event);

         let headers=new Headers({'Content-Type':'application/json'});
         let options=new RequestOptions({headers:headers});
         return this.http.post('/api/reclamations',JSON.stringify(newReclamation),options).map((response:Response)=>{
              return response.json();
         }).catch(this.handleError);
     }
     getReclamation(id:string):Observable<IReclamation>{
           return this.http.get("/api/reclamations/"+id).map((response:Response)=>{
               this.currentReclamation=<IReclamation>response.json();
               return this.currentReclamation;
           }).catch(this.handleError);
     }
     getReclamationAffected(matricule:number):Observable<IReclamation[]>{
          return this.http.get("/api/reclamationAffected/"+matricule).map((response:Response)=>{
              this.usersReclamation=<IReclamation[]>response.json();
              return this.usersReclamation;
          }).catch(this.handleError);
     }
     supprimerReclamation(id:number){
        console.log('jreb',id);
        this.http.delete("/api/reclamations/supprimer/"+id).catch(this.handleError).subscribe();
     }
     updateReclamation(values:any):Observable<IReclamation>{
          console.log('values li dkhlo lmethode li post',values);
          var la;
          let headers=new Headers({'Content-Type':'application/json'});
          let options=new RequestOptions({headers:headers});
          return this.http.post("/api/reclamations/update",JSON.stringify(values),options).map((response:Response)=>{
               la=response.json();
               console.log('lolololo ',la);
               return la;
          }).catch(this.handleError);
     }
     private handleError(error:Response){
       return Observable.throw(error.statusText);
     }
}
