import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {HttpModule} from '@angular/http'
import {ReclamationDetailsComponent} from './reclamation-details/reclamation-details.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ProfileComponent} from './profile.component'
import {LoginComponent} from './login.component'
import {userRoutes} from './user.routes'
import {ProfileFactureComponent} from './profileFacture.component'
import {FactureThumbnailComponent} from './facture-thumbnail.component'
import {ReclamationThumbnailComponent} from './reclamation-thumbnail.component'
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpModule,
      ReactiveFormsModule,
      RouterModule.forChild(userRoutes)
    ],
    declarations: [
      ReclamationDetailsComponent,
      ProfileComponent,
      ProfileFactureComponent,
      ReclamationThumbnailComponent,
      FactureThumbnailComponent,
      LoginComponent
    ],
    providers: [
    ]

})
export class UserModule {}
