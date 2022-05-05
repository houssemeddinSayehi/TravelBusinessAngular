import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { userLayoutComponent } from './layouts/user-layout/user-layout.component';
import { ChatComponent } from './pages/chat/chat.component';
import { postbytagComponent } from './pages/postbytag/postbytag.component';
import { postbytagnameComponent } from './pages/postbytagname/postbytagname.component';

const routes: Routes =[
  

 

  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'editor',
    loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule)
  },
  {
    path: 'article',
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
  },
 
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'editor',
    loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule)
  },
  {
    path: 'chat' , component: ChatComponent},

    
    {
      path: 'user',
      component: userLayoutComponent
     
    },
    {
      path: 'admin',
      component: AdminLayoutComponent
     
    },
    {
      path: 'postdememetag',
      component: postbytagComponent
     
    },

    {
      path: 'postdememetagname',
      component: postbytagnameComponent
     
    },
    {
      path: 'admin',
      component: AdminLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
        }
      ]
    },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ]
})

export class AppRoutingModule { }
