import { Component,OnInit } from '@angular/core'
import {FormControl, FormGroup,Validators} from '@angular/forms'
import {AuthService} from './auth.service'
import {Router} from '@angular/router'
import {IClient} from '../events/client.model'
import { ChangeDetectorRef } from '@angular/core';
@Component({
  templateUrl: 'app/user/profileFacture.component.html',
  styles: [`
            em {float:right; color:#E25C65; padding-left: 10px;}
            .error input {background-color:#E3C3C5;}
            .error ::-webkit-input-placeholder {color: #999;}
            .error ::-moz-placeholder {color: #999;}
            .error ::-moz-placeholder {color:#999;}
            .error :ms-input-placeholder {color: #999;}
            .pad-left{margin-left: 10px;}
            .well div {color: #222;}
            .bold {font-weight:bold ;}

          `]
})
export class ProfileFactureComponent implements OnInit {
      client:IClient;
      private montant:number;
      reclamations:any;
      private currentFacture:any;
      private log: string ='';
      private list: any=[];
      profileFactureForm:FormGroup;
      private rec:FormControl;
      cardNumber: string;
       expiryMonth: string;
       expiryYear: string;
       cvc: string;

       message: string;
      constructor(private authService:AuthService ,private router:Router, private cdRef:ChangeDetectorRef){
      }
      ngOnInit(){
          this.client=this.authService.currentClient;
          this.reclamations=this.client.facture;

      }
      calculer(data){
          this.montant=14.57;
          var index = this.list.findIndex(e => e === data);
          if(index!=-1){
            this.list.splice(index, 1);
          }
          else if(index===-1){
            this.list.push(data);
          }
          for (let fac of this.list) {
                    for (let rec of this.reclamations) {
                         if(rec.reference===+fac){
                         this.montant=this.montant+rec.montant;
                         }

                     }
            }
             this.montant=Math.round(this.montant * 100) / 100;



      }
      logout(){
        this.authService.logout().subscribe(()=>{
           this.router.navigate(['events/payer']);
        })
      }

      retour(){
         this.router.navigate(['events']);

      }
      valider(){
        console.log('montant ',this.montant);
      }
      getToken() {
     this.message = 'Loading...';

     (<any>window).Stripe.card.createToken({
       number: this.cardNumber,
       exp_month: this.expiryMonth,
       exp_year: this.expiryYear,
       cvc: this.cvc
     }, (status: number, response: any) => {
       if (status === 200) {
         this.message = `Success! Card token ${response.card.id}.`;
       } else {
         this.message = response.error.message;
       }
     });
   }


}
