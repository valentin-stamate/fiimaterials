import { Component, OnInit } from '@angular/core';
import {Themeswitcher} from '../../../../services/themeswitcher';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  darkTheme = false;

  constructor() { }

  ngOnInit() {
  }

}
