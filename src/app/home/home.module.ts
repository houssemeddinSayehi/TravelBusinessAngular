import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    SharedModule,

    HomeRoutingModule,
    ComponentsModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeAuthResolver
  ]
})
export class HomeModule {}
