import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {TodoComponent} from './pages/todo/todo.component';
import {FaqComponent} from './pages/faq/faq.component';
import {FirstYearComponent} from './pages/home/components/materials/years/first-year/first-year.component';
import {SecondYearComponent} from './pages/home/components/materials/years/second-year/second-year.component';
import {ThirdYearComponent} from './pages/home/components/materials/years/third-year/third-year.component';
import {AboutComponent} from './pages/about/about.component';
import {CreditsComponent} from './pages/credits/credits.component';


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'year/one', component: FirstYearComponent},
      {path: 'year/two', component: SecondYearComponent},
      {path: 'year/three', component: ThirdYearComponent},

    ]},
  {path: 'about', component: AboutComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'credits', component: CreditsComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
