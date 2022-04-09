import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const nav = document.getElementById('nav');

    if (nav) {
      nav.className = 'navbar';
      nav.classList.add('blue-style');
    }
  }

}
