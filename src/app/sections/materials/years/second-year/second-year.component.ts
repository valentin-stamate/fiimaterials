import { Component, OnInit } from '@angular/core';
import {ListItem} from '../listItem.module';
import {secondYearJson} from '../classes.json';

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

  constructor() {
    this.firstSemester = secondYearJson.firstSemester.classes;
    this.firstSemesterOptionalCourses = secondYearJson.firstSemester.optionalCourses;
    this.firstSemesterSupplementaryCourses = secondYearJson.firstSemester.supplementaryCourses;

    this.secondSemester = secondYearJson.secondSemester.classes;
    this.secondSemesterOptionalCourses = secondYearJson.secondSemester.optionalCourses
    this.secondSemesterSupplementaryCourses = secondYearJson.secondSemester.supplementaryCourses;
  }

  ngOnInit(): void {
  }

}
