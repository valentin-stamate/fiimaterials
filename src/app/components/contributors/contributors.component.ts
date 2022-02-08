import { Component, OnInit } from '@angular/core';
import {Data} from "../../../script/data";
import {Contributor, Roles} from "../../../script/models";

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {
  contributions: Contributor[] = Data.contributors;

  developers: Contributor[] = [];
  materialKeepers: Contributor[] = [];
  contributors: Contributor[] = [];

  constructor() {
    this.developers = this.contributions.filter((item) => item.roles.includes(Roles.DEVELOPER));
    this.materialKeepers = this.contributions.filter((item) => item.roles.includes(Roles.MATERIAL_KEEPER));
    this.contributors = this.contributions.filter((item) => item.roles.includes(Roles.CONTRIBUTOR));
  }

  ngOnInit(): void {
  }

}
