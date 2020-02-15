import { Component, OnInit } from '@angular/core';
import {Themeswitcher} from '../../services/themeswitcher';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public themeSwitcher: Themeswitcher) { }

  ngOnInit(): void {
  }

}
