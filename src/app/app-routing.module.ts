import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { HomeComponent } from './components/home/home.component';
import { FormsListComponent } from './components/forms-list/forms-list.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component'



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Contact', component: ContactComponent },
  {path: 'Welcome', component: WelcomeComponent},
  {path: 'Experience', component: ExperienceComponent},
  {path: 'Knowledge', component: KnowledgeComponent},
  {path: 'Forms', redirectTo: 'Login', pathMatch: 'full', component: FormsListComponent},
  {path: 'Login', component: LoginComponent },
  {path: 'Register', component: RegisterComponent },
  {path: 'Profile/:id', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
