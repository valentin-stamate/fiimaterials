import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SecondSubPageComponent } from './second-sub-page/second-sub-page.component';
import { ThirdSubpageComponent } from './third-subpage/third-subpage.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    SecondSubPageComponent,
    ThirdSubpageComponent
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
    MatButtonModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule { }
