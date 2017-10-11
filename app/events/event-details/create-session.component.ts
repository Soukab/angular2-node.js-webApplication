import {Component,OnInit,Output,EventEmitter} from '@angular/core'
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {ISession} from '../shared/index'
@Component ({
    selector:'create-session',
    templateUrl:'app/events/event-details/create-session.component.html',
    styles: [`
              em {float:right; color:#E25C65; padding-left: 10px;}
              .error input, .error select, .error textarea {background-color:#E3C3C5;}
              .error ::-webkit-input-placeholder {color: #999;}
              .error ::-moz-placeholder {color: #999;}
              .error ::-moz-placeholder {color:#999;}
              .error :ms-input-placeholder {color: #999;}
            `]
})
export class CreateSessionComponent implements OnInit{
    @Output() saveNewSession=new EventEmitter()
    newSessionForm:FormGroup
    name:FormControl
    date:FormControl
    abstract:FormControl
    ngOnInit(){
      this.name=new FormControl('',Validators.required);
      this.date=new FormControl('',Validators.required);
      this.abstract=new FormControl('',[Validators.required,Validators.maxLength(400)]);
      this.newSessionForm=new FormGroup({
         name:this.name,
         date:this.date,
         abstract:this.abstract
      })
    }
    saveSession(formValues){
       let session:ISession={
         id:undefined,
         name: formValues.name,
         date: formValues.date,
         abstract:formValues.abstract
       }
       this.saveNewSession.emit(session);
    }
}
