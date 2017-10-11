import {Component,Input} from '@angular/core'
import {IReclamation} from './shared/reclamation.model'
@Component({
   selector:'reclamation-thumbnail',
   template: `
   <div  [routerLink]="['/user/profile',reclamation.numDossier]" class="well hoverwell thumbnail">
        <h2>{{reclamation.titre}}</h2>
        <div>Date: {{reclamation.date}}</div>
        <div>Type: {{reclamation.type}}</div>
        <div>Localite:{{reclamation.selectedLocalite}} </div>
        <div>Responsable:{{reclamation?.affectation}} </div>
        <div>Etat:{{reclamation?.etat}} </div>
        <div>Description:{{reclamation.description}} </div>
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
export class ReclamationThumbnailComponent{
  @Input()    reclamation:IReclamation;


}
