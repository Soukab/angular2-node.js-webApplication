import {Component} from '@angular/core'
import {AuthService} from './auth.service'
import {Router} from '@angular/router'

@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left:10px;}
    `]

})
export class LoginComponent {
    loginInvalid=false;
    howa:boolean = false;
    constructor(private authService:AuthService, private router:Router){

}
login(formValues){
    this.authService.loginUser(formValues.userName,formValues.password).subscribe(resp =>{
        if(!resp){
           this.loginInvalid=true;
           this.router.navigate(['user/login']);
        }else{
        this.router.navigate(['user/profile']);
        }
    });
}
cancel(){
   this.router.navigate(['events']);

}
}
