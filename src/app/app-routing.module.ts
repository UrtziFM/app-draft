import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { HomeComponent } from './components/home/home.component';
import { FormsListComponent } from './components/forms-list/forms-list.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Contact', component: ContactComponent },
  {path: 'Welcome', component: WelcomeComponent},
  {path: 'Experience', component: ExperienceComponent},
  {path: 'Knowledge', component: KnowledgeComponent},
  {path: 'Forms', component: FormsListComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
