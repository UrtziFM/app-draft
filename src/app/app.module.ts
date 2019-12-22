import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ContactComponent } from './components/contact/contact.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    ContactComponent,
    WelcomeComponent,
    KnowledgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
