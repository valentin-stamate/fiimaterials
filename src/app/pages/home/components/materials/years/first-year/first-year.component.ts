import { Component, OnInit } from '@angular/core';
import {ListItem} from '../listItem.module';

import {DataService} from '../../../../../../services/data.service';
import {LayoutSizeService} from '../../../../../../services/layout-size.service';
import {AppCookieService} from '../../../../../../services/app.cookie.service';

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

  constructor(private dataService: DataService, public cookieAppService: AppCookieService) {
    const firstYear = dataService.classes.firstYearJson;

    this.firstSemester = firstYear.firstSemester.classes;
    this.firstSemesterSupplementaryCourses = firstYear.firstSemester.supplementaryCourses;

    this.secondSemester = firstYear.secondSemester.classes;
    this.secondSemesterSupplementaryCourses = firstYear.secondSemester.supplementaryCourses;
  }

  ngOnInit(): void {
  }

}
