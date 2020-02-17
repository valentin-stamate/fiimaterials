import {Component, HostListener, OnInit} from '@angular/core';
import {Themeswitcher} from '../../services/themeswitcher';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  constructor(public themeSwitcher: Themeswitcher) { }

  ngOnInit(): void {
  }

}
