import { Component, OnInit } from '@angular/core';
import {CONTRIBUTORS, Roles} from "../../../shared/materials/more";

@Component({
  selector: 'app-w-contributors',
  templateUrl: './w-contributors.component.html',
  styleUrls: ['./w-contributors.component.scss']
})
export class WContributorsComponent implements OnInit {

  roles = Roles;
  contributors = CONTRIBUTORS;

  constructor() { }

  ngOnInit(): void {
  }

}
