import { Component, OnInit } from '@angular/core';
import {MORE_MATERIALS} from "../../../shared/materials/more";

@Component({
  selector: 'app-w-more-materials',
  templateUrl: './w-more-materials.component.html',
  styleUrls: ['./w-more-materials.component.scss']
})
export class WMoreMaterialsComponent implements OnInit {

  moreMaterials = MORE_MATERIALS;

  constructor() { }

  ngOnInit(): void {
  }

}
