import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { AuthGuard } from '../core';
import { SharedModule } from '../shared';
import { SettingsRoutingModule } from './settings-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    SettingsRoutingModule
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule {}
