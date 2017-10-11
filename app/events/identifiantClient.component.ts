import {Component,OnInit} from '@angular/core'
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {AuthService} from '../user/auth.service'
@Component({
     templateUrl:'app/events/identifiantClient.component.html',
     styles: [`
         em {float:right; color:#E25C65; padding-left: 10px;}
         .error input {background-color:#E3C3C5;}
         .error ::-webkit-input-placeholder {color: #999;}
         .error ::-moz-placeholder {color: #999;}
         .error ::-moz-placeholder {color:#999;}
         .error :ms-input-placeholder {color: #999;}
     `]
})
export class IdentifiantClientComponent implements OnInit{
      loginInvalid=false;
      identifiantClientForm:FormGroup
      private numPolice:FormControl
      private email:FormControl
      private emailConfirm:FormControl
      private type:FormControl
      constructor(private router:Router,private authService:AuthService){}
      ngOnInit(){
           this.numPolice=new FormControl('',Validators.required);
           this.email=new FormControl('',[
              Validators.maxLength(30),
              Validators.required]);
           this.emailConfirm=new FormControl('',[
              Validators.maxLength(30),
              Validators.required]);
          this.type=new FormControl('',Validators.required);
          this.identifiantClientForm=new FormGroup({
              numPolice:this.numPolice,
              email:this.email,
              emailConfirm:this.emailConfirm,
              type:this.type
          })
      }
      supprimer(){
        this.router.navigate(['events']);
      }
      identifier(formValues){
        console.log('hahowa',formValues);
            this.authService.loginClient(formValues.numPolice,formValues.email).subscribe(resp =>{
                if(!resp){
                   this.loginInvalid=true;
                   this.router.navigate(['events/payer']);
                }else{
                 this.router.navigate(['user/profile/facture']);
                }
            });


      }
      validateConfirmEmail(){
        return this.emailConfirm.valid || this.emailConfirm.untouched;
      }
      validateEmail(){
        return this.email.valid || this.email.untouched;
      }
      validateNumPolice(){
        return this.numPolice.valid || this.numPolice.untouched;
      }
      validateType(){
        return this.type.valid || this.type.untouched;
      }
      validateConfirm(){
              if(this.email.dirty && this.emailConfirm.dirty){
                 if(this.email.value!=this.emailConfirm.value){
                     return true;
                 }
              }
        return false;
      }
}
