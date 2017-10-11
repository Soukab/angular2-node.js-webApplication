import {Injectable} from '@angular/core'
import {IUser} from './user.model'
import {IClient} from '../events/client.model'
import {IReclamation} from './shared/reclamation.model'
import {Subject,Observable} from 'rxjs/RX'
import {Http,Response,Headers,RequestOptions} from '@angular/http'
@Injectable()
export class AuthService {
    constructor(private http:Http){

    }
    currentUser:IUser;
    currentClient:IClient;
    usersLocalite:IUser[];
    loginUser(userName:number,password: string){
        let headers=new Headers({'Content-Type':'application/json'});
        let options=new RequestOptions({headers:headers});
        let loginInfo={username:userName,password:password};
        return this.http.post('/api/login',JSON.stringify(loginInfo),options).do(resp=>{
        if(resp){
            this.currentUser=<IUser>resp.json().user;
        }
        }).catch(error=>{
           return Observable.of(false);
        })

    }
    loginClient(numPolice:number,email:string){
        let headers=new Headers({'Content-Type':'application/json'});
        let options=new RequestOptions({headers:headers});
        let loginInfo={username:numPolice,password:email};
        return this.http.post('/api/identifierClient',JSON.stringify(loginInfo),options).do(resp=>{
        if(resp){
            this.currentClient=<IClient>resp.json().user;
        }
        }).catch(error=>{
           return Observable.of(false);
        })
    }
    isAuthenticated(){
        return !!this.currentUser;
    }
    checkAuthentificationStatus(){
        return this.http.get('/api/currentIdentity').map((response:any)=>{
           if(response._body){
               return response.json();
           }else{
               return {}
           }
        })
        .do(currentUser =>{
           if(!!currentUser.firstName){
              this.currentUser=currentUser;
           }
        })
        .subscribe();
    }

    getUsersLocalite(loc:number,typ:string):Observable<IUser[]>{
        return this.http.get("/api/userLocalite/"+loc+"/"+typ).map((response:Response)=>{
            this.usersLocalite=<IUser[]>response.json();
            return this.usersLocalite;
        }).catch(this.handleError);
    }

    private handleError(error:Response){
       return Observable.throw(error.statusText);
    }
    logout(){
        this.currentUser=undefined;
        let headers=new Headers({'Content-Type':'application/json'});
        let options=new RequestOptions({headers:headers});
        return this.http.post('/api/logout',JSON.stringify({}),options);
    }
}
