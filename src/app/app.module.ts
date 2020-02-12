import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { WelcomePageComponent } from './sections/welcome-page/welcome-page.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './sections/footer/footer.component';
import { MaterialsComponent } from './sections/materials/materials.component';
import {IntroductionComponent} from './sections/introduction/introduction.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FirstYearComponent } from './sections/materials/years/first-year/first-year.component';
import { SecondYearComponent } from './sections/materials/years/second-year/second-year.component';
import { ThirdYearComponent } from './sections/materials/years/third-year/third-year.component';
import {MatListModule} from '@angular/material/list';
import { ListItemComponent } from './sections/materials/years/list-item/list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    FooterComponent,
    IntroductionComponent,
    MaterialsComponent,
    FirstYearComponent,
    SecondYearComponent,
    ThirdYearComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule { }
