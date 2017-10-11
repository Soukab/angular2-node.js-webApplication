import { Component,OnInit } from '@angular/core'
import {FormControl, FormGroup,Validators} from '@angular/forms'
import {AuthService} from './auth.service'
import {Router} from '@angular/router'
import {IUser} from './user.model'
import {IReclamation} from './shared/reclamation.model'
import {ReclamationService} from './shared/reclamation.service'
@Component({
  templateUrl: 'app/user/profile.component.html',
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
export class ProfileComponent implements OnInit {
      user:IUser;
      reclamation:IReclamation[];
      constructor(private reclamService:ReclamationService ,private authService:AuthService ,private router:Router){
      }
      ngOnInit(){
      this.user=this.authService.currentUser;
        if(this.user){
           if(this.user.id===111){
               this.reclamService.getReclamations().subscribe((reclamation:IReclamation[])=>{
                  this.reclamation=reclamation;
               });
           }
           else{
               this.reclamService.getReclamationAffected(this.user.id).subscribe((reclamation:IReclamation[])=>{
                  this.reclamation=reclamation;
               });
           }
        }
      }
      logout(){
        this.authService.logout().subscribe(()=>{
           this.router.navigate(['/user/login']);
        })
      }

}
