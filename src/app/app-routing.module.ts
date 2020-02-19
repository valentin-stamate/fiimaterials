import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstPageComponent} from './pages/first-page/first-page.component';
import {ErrorPageComponent} from './sections/error-page/error-page.component';
import {TodoComponent} from './sections/todo/todo.component';
import {FaqComponent} from './sections/faq/faq.component';
import {AboutComponent} from './sections/about/about.component';


const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'todo', component: TodoComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
