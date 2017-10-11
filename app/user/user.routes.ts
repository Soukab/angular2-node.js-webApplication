import {ProfileComponent} from './profile.component'
import {LoginComponent} from './login.component'
import {ReclamationResolver} from './reclamation-resolver.service'
import {Error404Component} from '../errors/404.component'
import {ReclamationDetailsComponent} from './reclamation-details/reclamation-details.component'
import {ProfileFactureComponent} from './profileFacture.component'
import {Routes} from '@angular/router'
export const userRoutes:Routes =[
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/facture', component: ProfileFactureComponent},
  {path:'profile/:numDossier',component:ReclamationDetailsComponent,resolve:{reclamation:ReclamationResolver}},
  {path: 'login', component: LoginComponent}
]
