import {Error404Component} from './errors/404.component'
import {Routes} from '@angular/router'
import {EventListResolver} from './events/events-list-resolver.service'
import {
        EventsListComponent,
        EventDetailsComponent,
        CreateEventComponent,
        IdentifiantClientComponent,
        CreateSessionComponent,
        EventResolver
} from './events/index'

export const appRoutes:Routes= [
      {path:'events/payer',component: IdentifiantClientComponent},
      {path:'events/new',component: CreateEventComponent},
      {path :'events', component: EventsListComponent, resolve:{events:EventListResolver} },
      {path :'events/:id', component: EventDetailsComponent, resolve:{event:EventResolver}},
      {path:'events/session/new',component:CreateSessionComponent},
      {path :'404', component: Error404Component },
      {path:'', redirectTo:'/events', pathMatch:'full'},
      {path: 'user', loadChildren:'app/user/user.module#UserModule'}

]