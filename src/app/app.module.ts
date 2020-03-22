import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ContactComponent } from './components/contact/contact.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ApiContactService } from './services/contact.service';
import { FormsListComponent } from './components/forms-list/forms-list.component';
import { SkillsComponent } from './components/skills/skills.component';
import { RrssComponent } from './components/rrss/rrss.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    ContactComponent,
    WelcomeComponent,
    KnowledgeComponent,
    HomeComponent,
    FormsListComponent,
    SkillsComponent,
    RrssComponent,
    ExperienceComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ApiContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
