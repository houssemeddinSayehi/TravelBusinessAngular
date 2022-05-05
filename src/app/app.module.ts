import { NgModule } from '@angular/core';
<<<<<<< Updated upstream
import { BrowserModule } from '@angular/platform-browser';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
>>>>>>> Stashed changes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream

@NgModule({
  declarations: [
    AppComponent
=======
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import {UserService} from './services/UserService';
import {TravelProgramService} from './services/TravelProgramService';
import {MissionService} from './services/MissionService';
import {MissionAffectationService} from './services/MissionAffectationService';
import { userLayoutComponent } from './layouts/user-layout/user-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { Footer1Component, Header1Component, SharedModule } from './shared';
import { CoreModule } from './core';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './pages/chat/chat.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {NgxPaginationModule} from 'ngx-pagination';
import { postbytagComponent } from './pages/postbytag/postbytag.component';
import { TagComponent } from './pages/tag/tag.component';
import { postComponent } from './pages/post/post.component';
import { DictionnaireDesmotsInterditComponent } from './pages/dictionnaire-desmots-interdit/dictionnaire-desmots-interdit.component';
import { postbytagnameComponent } from './pages/postbytagname/postbytagname.component';
@NgModule({
  imports: [
    CoreModule,
    SimpleNotificationsModule.forRoot(),
    FormsModule,
    NgxPaginationModule,
   
    ComponentsModule,
    NgbModule,
    SharedModule,

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HomeModule,
    AuthModule,
   AdminLayoutModule,
    RouterModule,
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    Header1Component,
    Footer1Component,
    AppComponent,
    ChatComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    userLayoutComponent,
    TagComponent,
    postComponent,
   postbytagnameComponent,
    DictionnaireDesmotsInterditComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
<<<<<<< Updated upstream
  providers: [],
=======
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    Header1Component,
    Footer1Component,

    RouterModule,

  ],
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule { }
