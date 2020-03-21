import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialsComponent } from './pages/home/components/materials/materials.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FirstYearComponent } from './pages/home/components/materials/years/first-year/first-year.component';
import { SecondYearComponent } from './pages/home/components/materials/years/second-year/second-year.component';
import { ThirdYearComponent } from './pages/home/components/materials/years/third-year/third-year.component';
import {MatListModule} from '@angular/material/list';
import { ListItemComponent } from './pages/home/components/materials/years/list-item/list-item.component';
import { FeedbackComponent } from './pages/home/components/feedback/feedback.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TodoComponent } from './pages/todo/todo.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { UsefulComponent } from './pages/home/components/useful/useful.component';
import {DataService} from './services/data.service';
import {Themeswitcher} from './services/themeswitcher';
import {LayoutSizeService} from './services/layout-size.service';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { FaqComponent } from './pages/faq/faq.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CookieService} from 'ngx-cookie-service';
import {AppCookieService} from './services/app.cookie.service';
import {WelcomePageComponent} from './pages/home/components/welcome/welcome-page.component';
import {IntroductionComponent} from './pages/home/components/introduction/introduction.component';
import {AboutComponent} from './pages/about/about.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { ConsolasComponent } from './components/consolas/consolas.component';

const firebaseConfig = {
  apiKey: 'AIzaSyAHdqG831zeo_Mg-VEjBuwgUIdgz000Fns',
  authDomain: 'fiimateriale.firebaseapp.com',
  databaseURL: 'https://fiimateriale.firebaseio.com',
  projectId: 'fiimateriale',
  storageBucket: 'fiimateriale.appspot.com',
  messagingSenderId: '887119686242',
  appId: '1:887119686242:web:5335dfee47dfec96c1bf3b',
  measurementId: 'G-MQKMN9BCSQ'
};

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
    ListItemComponent,
    FeedbackComponent,
    TodoComponent,
    UsefulComponent,
    HomeComponent,
    ErrorComponent,
    FaqComponent,
    AboutComponent,
    CreditsComponent,
    ConsolasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatExpansionModule,
    MatCheckboxModule

  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    DataService,
    Themeswitcher,
    LayoutSizeService,
    CookieService,
    AppCookieService,
  ]
})
export class AppModule { }
