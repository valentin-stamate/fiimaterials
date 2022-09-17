import { Component, OnInit } from '@angular/core';
import {Class, Year} from "../../../shared/interfaces/interfaces";
import {B_FIRST_YEAR} from "../../../shared/materials/b-first-year";
import {B_SECOND_YEAR} from "../../../shared/materials/b-second-year";
import {B_THIRD_YEAR} from "../../../shared/materials/b-third-year";
import {ClassType, CycleType} from "../../../shared/const";

enum MaterialsKeys {
  SELECTED_CYCLE = 'selected-cycle',
  SELECTED_SEMESTER = 'selected-semester',
}

@Component({
  selector: 'app-w-materials',
  templateUrl: './w-materials.component.html',
  styleUrls: ['./w-materials.component.scss']
})
export class WMaterialsComponent implements OnInit {
  classTypes = ClassType;
  cycleType = CycleType;

  years: Year[] = [
    B_FIRST_YEAR,
    B_SECOND_YEAR,
    B_THIRD_YEAR,
  ];

  semesters: number[] = [];

  selectedCycle: string = this.cycleType.BACHELORS;
  selectedSemester: string = '1';
  selectedYear = 1;

  selectedClasses: Class[] = [];
  filteredClasses: Class[] = [];
  searchQuery = '';

  constructor() {
    this.years.forEach(year => {
      year.semesters.forEach(semester => {
        this.semesters.push(semester.semesterCount);
      });
    });

    this.selectedCycle = localStorage.getItem(MaterialsKeys.SELECTED_CYCLE) || this.selectedCycle;
    this.selectedSemester = localStorage.getItem(MaterialsKeys.SELECTED_SEMESTER) || this.selectedSemester;

    this.refreshMaterials();
    this.backupToLocalStorage();
  }

  ngOnInit(): void {
  }

  async onCycleChange(cycle: CycleType) {
    this.selectedCycle = cycle;
    this.selectedSemester = '1';
    this.searchQuery = '';

    this.backupToLocalStorage();
    this.refreshMaterials();
  }

  onSemesterChange(semester: number) {
    this.selectedSemester = `${semester}`;
    this.searchQuery = '';

    this.backupToLocalStorage();
    this.refreshMaterials();
  }

  refreshMaterials(search: string = '') {
    this.years.forEach(year => {
      year.semesters.forEach(semester => {
        if (`${semester.semesterCount}` === this.selectedSemester) {
          this.selectedClasses = semester.classes;
        }
      });
    });

    this.selectedYear = Math.floor((parseInt(this.selectedSemester) + 1) / 2);

    const searchString = search.toLowerCase();

    this.filteredClasses = this.selectedClasses.filter(item => {
      if (searchString === '') {
        return true;
      }

      const className = item.name.toLowerCase();
      const short = item.name.toLowerCase();

      return className.includes(searchString) ||
        short.includes(searchString) ||
        `${item.credits}` === searchString;
    });
  }

  onSearchChange() {
    this.refreshMaterials(this.searchQuery);
  }

  backupToLocalStorage() {
    localStorage.setItem(MaterialsKeys.SELECTED_CYCLE, this.selectedCycle);
    localStorage.setItem(MaterialsKeys.SELECTED_SEMESTER, this.selectedSemester);
  }

}
