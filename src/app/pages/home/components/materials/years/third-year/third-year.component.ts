import { Component, OnInit } from '@angular/core';
import {ListItem} from '../listItem.module';
import {DataService} from '../../../../../../services/data.service';
import {AppCookieService} from '../../../../../../services/app.cookie.service';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-third-year',
  templateUrl: './third-year.component.html',
  styleUrls: ['./third-year.component.scss']
})
export class ThirdYearComponent {
  firstSemester: ListItem[];
  firstSemesterOptionalCourses: ListItem[] = [];
  firstSemesterSupplementaryCourses: ListItem[] = [];

  secondSemester: ListItem[] = [];
  secondSemesterOptionalCourses: ListItem[] = [];
  secondSemesterSupplementaryCourses: ListItem[] = [];

  constructor(private dataService: DataService,
              public cookieAppService: AppCookieService,
              private db: AngularFireDatabase) {
    const thirdYear = dataService.classes.thirdYearJson;

    const reference$ = this.db.list('Years/Third Year');

    this.firstSemester = thirdYear.firstSemester.classes;
    this.firstSemesterOptionalCourses = thirdYear.firstSemester.optionalCourses;
    this.firstSemesterSupplementaryCourses = thirdYear.firstSemester.supplementaryCourses;

    reference$.set('/First Semester/Compulsory Courses', this.firstSemester);
    reference$.set('/First Semester/Optional Courses', this.firstSemesterOptionalCourses);
    reference$.set('/First Semester/Supplementary Courses', this.firstSemesterSupplementaryCourses);

    this.secondSemester = thirdYear.secondSemester.classes;
    this.secondSemesterOptionalCourses = thirdYear.secondSemester.optionalCourses;
    this.secondSemesterSupplementaryCourses = thirdYear.secondSemester.supplementaryCourses;

    reference$.set('/Second Semester/Compulsory Courses', this.secondSemester);
    reference$.set('/Second Semester/Optional Courses', this.secondSemesterOptionalCourses);
    reference$.set('/Second Semester/Supplementary Courses', this.secondSemesterSupplementaryCourses);
  }

}
