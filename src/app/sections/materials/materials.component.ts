import { Component, OnInit } from '@angular/core';
import {ThemeSwitcher} from '../../services/ThemeSwitcher';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  constructor(public themeSwitcher: ThemeSwitcher) { }

  ngOnInit(): void {
  }

}
