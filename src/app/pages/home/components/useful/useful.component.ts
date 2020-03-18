import { Component, OnInit } from '@angular/core';
import {Themeswitcher} from '../../../../services/themeswitcher';
import {DataService} from '../../../../services/data.service';

@Component({
  selector: 'app-useful',
  templateUrl: './useful.component.html',
  styleUrls: ['./useful.component.scss']
})
export class UsefulComponent implements OnInit {
  sectionTitle = 'Util';
  usefulLinks: {title, link}[] = [];
  constructor(public themeSwitcher: Themeswitcher, public dataService: DataService) { }

  ngOnInit(): void {
    this.usefulLinks = this.dataService.usefulLinks;
  }

}
