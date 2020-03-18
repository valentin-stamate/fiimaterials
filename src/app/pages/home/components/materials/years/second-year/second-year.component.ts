import { Component, OnInit } from '@angular/core';
import {ListItem} from '../listItem.module';
import {DataService} from '../../../../../../services/data.service';
import {AppCookieService} from '../../../../../../services/app.cookie.service';

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

  constructor(private dataService: DataService, public cookieAppService: AppCookieService) {
    const secondYear = dataService.classes.secondYearJson;
    this.firstSemester = secondYear.firstSemester.classes;
    this.firstSemesterOptionalCourses = secondYear.firstSemester.optionalCourses;
    this.firstSemesterSupplementaryCourses = secondYear.firstSemester.supplementaryCourses;

    this.secondSemester = secondYear.secondSemester.classes;
    this.secondSemesterOptionalCourses = secondYear.secondSemester.optionalCourses;
    this.secondSemesterSupplementaryCourses = secondYear.secondSemester.supplementaryCourses;
  }

  ngOnInit(): void {
  }

}
