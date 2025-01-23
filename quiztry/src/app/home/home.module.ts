import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page'; // Import the HomePage component


@NgModule({
 imports: [
   CommonModule,
   FormsModule,
   IonicModule,
   HomePageRoutingModule,
   HomePage // Import the HomePage component here
 ],
 declarations: []
})
export class HomePageModule {}