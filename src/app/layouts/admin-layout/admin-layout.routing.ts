import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { MissionComponent } from 'src/app/pages/missions/missions.component';
import {TravelProgramComponent} from '../../pages/travelprograms/travelprograms.component'
import { postComponent } from 'src/app/pages/post/post.component';
import { DictionnaireDesmotsInterditComponent } from 'src/app/pages/dictionnaire-desmots-interdit/dictionnaire-desmots-interdit.component';
import { TagComponent } from 'src/app/pages/tag/tag.component';
import { AdminLayoutModule } from './admin-layout.module';

export const AdminLayoutRoutes: Routes = [
    { path: '',      component: AdminLayoutModule },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'missions',       component: MissionComponent},
    { path: 'post',       component: postComponent},
    { path: 'tag',   component: TagComponent },

    { path: 'motsinterdit',       component: DictionnaireDesmotsInterditComponent},
    { path: 'travelprogram',  component: TravelProgramComponent}
];
