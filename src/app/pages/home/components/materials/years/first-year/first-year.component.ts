import { Component, OnInit } from '@angular/core';
import {ListItem} from '../listItem.module';

import {DataService} from '../../../../../../services/data.service';
import {LayoutSizeService} from '../../../../../../services/layout-size.service';
import {AppCookieService} from '../../../../../../services/app.cookie.service';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-first-year',
  templateUrl: './first-year.component.html',
  styleUrls: ['./first-year.component.scss']
})
export class FirstYearComponent implements OnInit {
  firstSemester: ListItem[];
  firstSemesterSupplementaryCourses: ListItem[] = [];

  secondSemester: ListItem[] = [];
  secondSemesterSupplementaryCourses: ListItem[] = [];

  constructor(private dataService: DataService, public cookieAppService: AppCookieService, private db: AngularFireDatabase) {
    const firstYear = dataService.classes.firstYearJson;

    console.log('First Attempt');
    const reference$ = this.db.list('/Years/First Year');

    this.firstSemester = firstYear.firstSemester.classes;
    this.firstSemesterSupplementaryCourses = firstYear.firstSemester.supplementaryCourses;

    reference$.set('/First Semester/Compulsory Courses', this.firstSemester);
    reference$.set('/First Semester/Supplementary Courses', this.firstSemesterSupplementaryCourses);

    this.secondSemester = firstYear.secondSemester.classes;
    this.secondSemesterSupplementaryCourses = firstYear.secondSemester.supplementaryCourses;

    reference$.set('/Second Semester/Compulsory Courses', this.secondSemester);
    reference$.set('/Second Semester/Supplementary Courses', this.secondSemesterSupplementaryCourses);
  }

  ngOnInit(): void {
  }

}
