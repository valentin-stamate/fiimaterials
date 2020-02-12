import { Component, OnInit } from '@angular/core';
import {ListItem} from '../listItem.module';

import {firstYearJson} from '../classes.json';

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

  constructor() {
    this.firstSemester = firstYearJson.firstSemester.classes;
    this.firstSemesterSupplementaryCourses = firstYearJson.firstSemester.supplementaryCourses;

    this.secondSemester = firstYearJson.secondSemester.classes;
    this.secondSemesterSupplementaryCourses = firstYearJson.secondSemester.supplementaryCourses;
  }

  ngOnInit(): void {
  }

}
