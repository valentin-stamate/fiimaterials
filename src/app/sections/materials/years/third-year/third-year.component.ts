import { Component, OnInit } from '@angular/core';
import {ListItem} from '../listItem.module';
import {thirdYearJson} from '../classes.json';

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

  constructor() {
    this.firstSemester = thirdYearJson.firstSemester.classes;
    this.firstSemesterOptionalCourses = thirdYearJson.firstSemester.optionalCourses;
    this.firstSemesterSupplementaryCourses = thirdYearJson.firstSemester.supplementaryCourses;

    this.secondSemester = thirdYearJson.secondSemester.classes;
    this.secondSemesterOptionalCourses = thirdYearJson.secondSemester.optionalCourses
    this.secondSemesterSupplementaryCourses = thirdYearJson.secondSemester.supplementaryCourses;
  }

}
