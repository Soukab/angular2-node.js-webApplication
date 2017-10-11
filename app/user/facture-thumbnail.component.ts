import {Component,Input,OnInit,Output,EventEmitter} from '@angular/core'
import {IClient} from '../events/client.model'
@Component({
   selector:'facture-thumbnail',
   template: `
       <div class="well hoverwell thumbnail">
            <h2>Reference: {{reclamation.reference}}</h2>
            <div>Type: {{reclamation.type}}</div>
            <div>Date: {{reclamation.date}}</div>
            <div>Exigibilite:{{reclamation.exigibilite}} </div>
            <div>Montant:{{reclamation?.montant}} DH </div>
            <div>
                <input type="checkbox" value="{{reclamation.reference}}" (change)="EmployeeCheckbox(reclamation.reference)" >Regler
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
export class FactureThumbnailComponent implements OnInit{
    @Input()    reclamation:any;
    @Input()    tout:any;
    @Output()   eventChecked=new EventEmitter();
    private list;
    private liste;
    constructor(){
    }
    ngOnInit(){
      this.list=[];
      this.liste=this.reclamation;
    }
    EmployeeCheckbox(ref){
       this.eventChecked.emit(ref);
    }
}
