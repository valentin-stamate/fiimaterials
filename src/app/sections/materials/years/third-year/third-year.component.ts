import { Component, OnInit } from '@angular/core';
import {ListItem} from '../listItem.module';
import {DataService} from '../../../../services/data.service';

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

  constructor(private dataService: DataService) {
    const thirdYear = dataService.classes.thirdYearJson;

    this.firstSemester = thirdYear.firstSemester.classes;
    this.firstSemesterOptionalCourses = thirdYear.firstSemester.optionalCourses;
    this.firstSemesterSupplementaryCourses = thirdYear.firstSemester.supplementaryCourses;

    this.secondSemester = thirdYear.secondSemester.classes;
    this.secondSemesterOptionalCourses = thirdYear.secondSemester.optionalCourses;
    this.secondSemesterSupplementaryCourses = thirdYear.secondSemester.supplementaryCourses;
  }

}
