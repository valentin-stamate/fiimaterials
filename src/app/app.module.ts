import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { FeedbackComponent } from './sections/feedback/feedback.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TodoComponent } from './sections/todo/todo.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { UsefulComponent } from './sections/useful/useful.component';
import {DataService} from './services/data.service';
import {Themeswitcher} from './services/themeswitcher';
import { SectionTitleComponent } from './section-title/section-title.component';

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
    SectionTitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
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
    MatExpansionModule

  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    DataService,
    Themeswitcher
  ]
})
export class AppModule { }
