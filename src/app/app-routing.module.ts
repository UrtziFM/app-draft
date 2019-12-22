import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { IntroductionComponent } from './components/introduction/introduction.component';



const routes: Routes = [
  {path: '/', component: IntroductionComponent},
  {path: '/Contact', component: ContactComponent },
  {path: '/Welcome', component: WelcomeComponent},
  {path: '/Knowledge', component: KnowledgeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
