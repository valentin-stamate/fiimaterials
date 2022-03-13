import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MaterialsComponent} from "./components/materials/materials.component";
import {FeedbackComponent} from "./components/feedback/feedback.component";
import {DonateComponent} from "./components/donate/donate.component";
import {ContributorsComponent} from "./components/contributors/contributors.component";
import {ClassesComponent} from "./components/classes/classes.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'materials', component: MaterialsComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'donate', component: DonateComponent},
  {path: 'contributors', component: ContributorsComponent},
  {path: 'classes', component: ClassesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
