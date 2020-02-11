import { Component, OnInit } from '@angular/core';
import {ThemeSwitcher} from '../../services/ThemeSwitcher';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public themeSwitcher: ThemeSwitcher) { }

  ngOnInit(): void {
  }

}
