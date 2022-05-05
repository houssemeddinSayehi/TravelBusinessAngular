import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { MissionComponent } from '../../pages/missions/missions.component'
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {TravelProgramComponent} from '../../pages/travelprograms/travelprograms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { userLayoutRoutes } from './user-layout.routing';
import { AdminLayoutModule } from '../admin-layout/admin-layout.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { NgxStarRatingModule } from 'ngx-star-rating';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app.routing';
import { postbytagComponent } from 'src/app/pages/postbytag/postbytag.component';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userLayoutRoutes),
    FormsModule,
    AdminLayoutModule,
    HttpClientModule,
    NgbModule,
    
    ClipboardModule
  ],
  declarations: [
    postbytagComponent

   
  ]
})

export class userLayoutModule {

}
