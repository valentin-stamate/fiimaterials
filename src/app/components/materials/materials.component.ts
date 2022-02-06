import { Component, OnInit } from '@angular/core';
import {Data} from "../../../script/data";
import {Class, ClassType} from "../../../script/models";
import {Cookies, CookieService} from "../../../script/cookie";

enum Years {
  FIRST= '1',
  SECOND = '2',
  THIRD = '3',
}

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  years = Years;
  selectedYear = Years.FIRST;

  materials: Class[] = Data.classes;
  firstSemester: Class[] = [];
  secondSemester: Class[] = [];

  classType = ClassType;
  constructor() {
    if (!CookieService.readCookie(Cookies.SELECTED_YEAR)) {
      CookieService.setCookie(Cookies.SELECTED_YEAR, this.selectedYear);
    }

    const year = CookieService.readCookie(Cookies.SELECTED_YEAR);

    if (year === Years.FIRST) {
      this.onFirstYear();
    }

    if (year === Years.SECOND) {
      this.onSecondYear();
    }

    if (year === Years.THIRD) {
      this.onThirdYear();
    }
  }

  ngOnInit(): void {
  }

  onFirstYear() {
    this.firstSemester = this.materials.filter((item) => item.year === 1 && item.semester === 1);
    this.secondSemester = this.materials.filter((item) => item.year === 1 && item.semester === 2);

    this.selectedYear = Years.FIRST;
    CookieService.setCookie(Cookies.SELECTED_YEAR, this.selectedYear);
  }

  onSecondYear() {
    this.firstSemester = this.materials.filter((item) => item.year === 2 && item.semester === 1);
    this.secondSemester = this.materials.filter((item) => item.year === 2 && item.semester === 2);

    this.selectedYear = Years.SECOND;
    CookieService.setCookie(Cookies.SELECTED_YEAR, this.selectedYear);
  }

  onThirdYear() {
    this.firstSemester = this.materials.filter((item) => item.year === 3 && item.semester === 1);
    this.secondSemester = this.materials.filter((item) => item.year === 3 && item.semester === 2);

    this.selectedYear = Years.THIRD;
    CookieService.setCookie(Cookies.SELECTED_YEAR, this.selectedYear);
  }

}
