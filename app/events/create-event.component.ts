import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {EventService} from './shared/index'
import {ReclamationService} from '../user/shared/reclamation.service'
@Component({
    templateUrl:'app/events/create-event.component.html',
    styles: [`
              em {float:right; color:#E25C65; padding-left: 10px;}
              .error input {background-color:#E3C3C5;}
              .error ::-webkit-input-placeholder {color: #999;}
              .error ::-moz-placeholder {color: #999;}
              .error ::-moz-placeholder {color:#999;}
              .error :ms-input-placeholder {color: #999;}
            `]
})
export class CreateEventComponent {
  isDirty:boolean = true;
  public type: string;
  public localite;
  constructor(private router:Router, private eventService:EventService, private reclamService:ReclamationService){
    this.reclamService.getLocalites().subscribe((localite)=>{
       this.localite=localite;
    });
  }
  cancel(){
      this.router.navigate(['/events'])
  }
  saveEvent(formValues){
      this.reclamService.saveReclamation(formValues).subscribe(event=>{
          this.isDirty=false;
          this.router.navigate(['/events']);
      });
  }
}
