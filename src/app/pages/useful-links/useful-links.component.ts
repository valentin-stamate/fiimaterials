import { Component, OnInit } from '@angular/core';
import {Themeswitcher} from '../../services/themeswitcher';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.scss']
})
export class UsefulLinksComponent implements OnInit {

  usefulLinks: {title, link}[] = [];
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.usefulLinks = this.dataService.usefulLinks;
  }

}
