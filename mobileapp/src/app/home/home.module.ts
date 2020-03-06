import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'map',
        loadChildren: '../pages/map/map.module#MapPageModule'
      },
      {
        path: 'settings',
        loadChildren: '../pages/settings/settings.module#SettingsPageModule'
      },
      {
        path: 'about',
        loadChildren: '../pages/about/about.module#AboutPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/map'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
