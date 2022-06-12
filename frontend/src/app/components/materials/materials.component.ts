import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {RestEndpoints} from "../../service/rest.endpoints";

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  loading = false;
  errorMessage = '';

  classes = [];

  constructor() { }

  ngOnInit(): void {
    this.onRefreshMaterials();

    const nav = document.getElementById('nav');

    if (nav) {
      nav.className = 'navbar';
      nav.classList.add('yellow-style');
    }

  }

  onRefreshMaterials() {
    this.loading = true;
    this.errorMessage = '';

    axios.get(RestEndpoints.MATERIALS)
      .then(res => {
        this.classes = res.data as any;
      }).catch(err => {
        this.errorMessage = 'Error';
      }).finally(() => {
        this.loading = false;
      });
  }

}
