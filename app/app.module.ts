import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {ReclamationResolver} from './user/reclamation-resolver.service'
import {HttpModule} from '@angular/http'
import {Error404Component} from './errors/404.component'
import {NavBarComponent} from './nav/navbar.component'
import {EventsAppComponent} from './events-app.components'
import {appRoutes} from './routes'
import {JQ_TOKEN,TOASTR_TOKEN,SimpleModalComponent,ModalTriggerDirective} from './common/index'
import {AuthService} from './user/auth.service'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {ReclamationService} from './user/shared/reclamation.service'
import {
        EventsListComponent,
        EventThumbnailComponent,
        EventService,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        IdentifiantClientComponent,
        SessionListComponent,
        EventResolver
} from './events/index'
import {EventListResolver} from './events/events-list-resolver.service'
declare let toastr:any
declare let jQuery:Object;
@NgModule({
imports: [BrowserModule,
          FormsModule,
          HttpModule,
          ReactiveFormsModule,
          RouterModule.forRoot(appRoutes)
         ],
declarations: [
                EventsAppComponent,
                EventsListComponent,
                EventThumbnailComponent,
                NavBarComponent,
                EventDetailsComponent,
                CreateEventComponent,
                IdentifiantClientComponent,
                CreateSessionComponent,
                SessionListComponent,
                SimpleModalComponent,
                ModalTriggerDirective,
                Error404Component
                ],
providers: [EventService,
            {
              provide:TOASTR_TOKEN,
              useValue: toastr
            },
            {
              provide:JQ_TOKEN,
              useValue: jQuery
            },
            AuthService,
            ReclamationService,
            ReclamationResolver,
            EventListResolver,
            EventResolver,
            {
              provide:'canDeactivateCreateEvent',
              useValue: checkDirtyState

            }
            ],
bootstrap: [EventsAppComponent]
})
export class AppModule {}
function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
      return window.confirm('you have not saved this event, do you really want to cancel ?');
  return true;
}
