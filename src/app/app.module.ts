import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {routing} from './app.routes'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TimelinesComponent } from './components/timelines/timelines.component';
import { MyContactComponent } from './components/my-contact/my-contact.component';
import { MyInterestsComponent } from './components/my-interests/my-interests.component';
import {ApiService} from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SkillsComponent,
    TimelinesComponent,
    MyContactComponent,
    MyInterestsComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,routing,HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
