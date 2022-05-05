import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { MissionComponent } from '../../pages/missions/missions.component'
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {TravelProgramComponent} from '../../pages/travelprograms/travelprograms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagComponent } from 'src/app/pages/tag/tag.component';
import { postComponent } from 'src/app/pages/post/post.component';
import { DictionnaireDesmotsInterditComponent } from 'src/app/pages/dictionnaire-desmots-interdit/dictionnaire-desmots-interdit.component';
import { ChatComponent } from 'src/app/pages/chat/chat.component';
import { Footer1Component, Header1Component, SharedModule } from 'src/app/shared';
// import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
    SharedModule,
    ClipboardModule
  ],
  declarations: [
    TravelProgramComponent,
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
 
    MissionComponent,
    
  ]
})

export class AdminLayoutModule {}
