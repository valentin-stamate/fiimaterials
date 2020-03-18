import { Component, OnInit } from '@angular/core';
import {LayoutSizeService} from '../../services/layout-size.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public layoutSizeService: LayoutSizeService) { }

  ngOnInit(): void {
  }

}
