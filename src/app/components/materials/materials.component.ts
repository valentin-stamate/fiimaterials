import { Component, OnInit } from '@angular/core';
import {Class} from "../../service/models";
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

  firstYear: [Class[], Class[]] = [[], []];
  secondYear: [Class[], Class[]] = [[], []];
  thirdYear: [Class[], Class[]] = [[], []];

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
        const list = res.data as Class[];

        this.firstYear[0] = list.filter(item => item.year === 1 && item.semester === 1);
        this.firstYear[1] = list.filter(item => item.year === 1 && item.semester === 2);

        this.secondYear[0] = list.filter(item => item.year === 2 && item.semester === 1);
        this.secondYear[1] = list.filter(item => item.year === 2 && item.semester === 2);

        this.thirdYear[0] = list.filter(item => item.year === 3 && item.semester === 1);
        this.thirdYear[1] = list.filter(item => item.year === 3 && item.semester === 2);
      }).catch(err => {
        this.errorMessage = err.response.data;
      }).finally(() => {
        this.loading = false;
      });
  }

}
