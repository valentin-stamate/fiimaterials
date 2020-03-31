import { Component, OnInit } from '@angular/core';
import {ListItem} from '../listItem.module';
import {DataService} from '../../../../../../services/data.service';
import {AppCookieService} from '../../../../../../services/app.cookie.service';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-second-year',
  templateUrl: './second-year.component.html',
  styleUrls: ['./second-year.component.scss']
})
export class SecondYearComponent implements OnInit {
  firstSemester: ListItem[];
  firstSemesterOptionalCourses: ListItem[] = [];
  firstSemesterSupplementaryCourses: ListItem[] = [];

  secondSemester: ListItem[] = [];
  secondSemesterOptionalCourses: ListItem[] = [];
  secondSemesterSupplementaryCourses: ListItem[] = [];

  constructor(private dataService: DataService,
              public cookieAppService: AppCookieService,
              public db: AngularFireDatabase) {

    const reference$ = this.db.list('Years/Second Year');

    const secondYear = dataService.classes.secondYearJson;
    this.firstSemester = secondYear.firstSemester.classes as ListItem[];
    this.firstSemesterOptionalCourses = secondYear.firstSemester.optionalCourses as ListItem[];
    this.firstSemesterSupplementaryCourses = secondYear.firstSemester.supplementaryCourses;

    const a: Array<string> = ['jdlask', 'jdlaksj', 'jdsakjsla'];

    reference$.set('/First Semester/Compulsory Courses', this.firstSemester);
    reference$.set('/First Semester/Optional Courses', this.firstSemesterOptionalCourses);
    reference$.set('/First Semester/Supplementary Courses', this.firstSemesterSupplementaryCourses);

    this.secondSemester = secondYear.secondSemester.classes;
    this.secondSemesterOptionalCourses = secondYear.secondSemester.optionalCourses;
    this.secondSemesterSupplementaryCourses = secondYear.secondSemester.supplementaryCourses;

    reference$.set('/Second Semester/Compulsory Courses', this.secondSemester);
    reference$.set('/Second Semester/Optional Courses', this.secondSemesterOptionalCourses);
    reference$.set('/Second Semester/Supplementary Courses', this.secondSemesterSupplementaryCourses);
  }

  ngOnInit(): void {
  }

}
