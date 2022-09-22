import { Component, OnInit } from '@angular/core';
import {CONTRIBUTORS, Roles} from "../../../shared/const";
import {Contributor} from "../../../shared/interfaces/interfaces";

@Component({
  selector: 'app-w-contributors',
  templateUrl: './w-contributors.component.html',
  styleUrls: ['./w-contributors.component.scss']
})
export class WContributorsComponent implements OnInit {

  roles = Roles;
  contributors: Contributor[] = [];

  constructor() {
    this.contributors = CONTRIBUTORS.map(item => {
      return {
        ...item,
        ...{
          contributionDates: item.contributionDates.map(date => {
            return date.split('T')[0].split('-').reverse().join('.');
          }),
        },
      }
    });
  }

  ngOnInit(): void {
  }

}
