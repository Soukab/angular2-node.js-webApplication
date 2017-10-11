import {Injectable} from '@angular/core'
import {Resolve,ActivatedRouteSnapshot} from '@angular/router'
import {ReclamationService} from './shared/reclamation.service'
@Injectable()
export class ReclamationResolver implements Resolve<any>{
 constructor(private recService:ReclamationService){}
 resolve(route:ActivatedRouteSnapshot){
     return this.recService.getReclamation(route.params['numDossier']);
 }
}
