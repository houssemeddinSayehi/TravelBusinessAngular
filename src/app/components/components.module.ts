import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterUserComponent } from './footer-user/footer-user.component';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterUserComponent,
    SidebarUserComponent,
    NavbarUserComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    FooterUserComponent,
    SidebarUserComponent,
    NavbarUserComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
