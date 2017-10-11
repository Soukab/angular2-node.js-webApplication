import {Component,OnInit} from '@angular/core'
import {ReclamationService} from '../shared/reclamation.service'
import {ActivatedRoute} from '@angular/router'
import {IReclamation} from '../shared/reclamation.model'
import {AuthService} from '../auth.service'
import {IUser} from '../user.model'
import {Router} from '@angular/router'
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {Observable} from 'rxjs/RX'

@Component({
 templateUrl: '/app/user/reclamation-details/reclamation-details.component.html',
 styles:[`
    .container {padding-left:20px; padding-right:20px;}
 `]
})
export class ReclamationDetailsComponent implements OnInit{
    traitReclamationForm:FormGroup;
    numDossier:FormControl;
    titre:FormControl;
    date:FormControl;
    type:FormControl;
    description:FormControl;
    localite:FormControl;
    etat:FormControl;
    affectation:FormControl;
    rapport:FormControl;
    user:IUser;
    reclamation:any;
    usersLocalite:IUser[];
    chef: boolean=false;
    constructor(private recService:ReclamationService,private route:ActivatedRoute,private authService:AuthService,private router:Router){
    }
    ngOnInit(){

        this.reclamation=this.route.snapshot.data['reclamation'];
        this.user=this.authService.currentUser;
        if(this.user.id===111){
        this.chef=true;
        }
        this.authService.getUsersLocalite(this.reclamation.selectedLocalite,this.reclamation.type).subscribe((usersLocalite:IUser[])=>{
                this.usersLocalite=usersLocalite;
                console.log('fifilocalite',this.reclamation);
        });

           this.numDossier=new FormControl({value:this.reclamation.numDossier,disabled:true},Validators.required);
           this.titre=new FormControl({value:this.reclamation.titre,disabled:true},Validators.required);
           this.date=new FormControl({value:this.reclamation.date,disabled:true},Validators.required);
           this.type=new FormControl({value:this.reclamation.type,disabled:this.user.id!=111},Validators.required);
           this.description=new FormControl({value:this.reclamation.description,disabled:true},Validators.required);
           this.localite=new FormControl({value:this.reclamation.selectedLocalite,disabled:true},Validators.required);
           this.etat=new FormControl(this.reclamation.etat,Validators.required);
           this.affectation=new FormControl({value:'',disabled:this.user.id!=111},Validators.required);
           this.rapport=new FormControl({value:this.reclamation.rapport,disabled:this.user.id===111},Validators.required);
           this.traitReclamationForm=new FormGroup({
                numDossier:this.numDossier,
                titre:this.titre,
                date:this.date,
                type:this.type,
                description:this.description,
                localite:this.localite,
                etat:this.etat,
                affectation:this.affectation,
                rapport:this.rapport
           })

           console.log('form reclamation avant:',this.traitReclamationForm.value);

           this.traitReclamationForm.controls['type'].valueChanges.subscribe((val) => {
               this.authService.getUsersLocalite(this.localite.value,val).subscribe((usersLocalite:IUser[])=>{
                       this.usersLocalite=usersLocalite;
               });
           });

    }
    saveReclamationTraite(formVal){
          var newVal={
             "numDossier":this.numDossier.value,
             "rapport":this.rapport.value,
             "etat":this.etat.value,
             "type":this.type.value,
             "affectation":this.affectation.value
          }
          console.log('newVal ach fiha',newVal);
          this.recService.updateReclamation(newVal).subscribe(recUpdated=>{
            this.router.navigate(['user/profile']);
          });
    }

    supprimer(){
        this.recService.supprimerReclamation(this.reclamation.id);
        console.log("supprime lkhra",this.reclamation.id);
        this.router.navigate(['user/profile']);
    }

}
