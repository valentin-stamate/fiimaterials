import { Component, OnInit } from '@angular/core';
import {ListItem} from '../listItem.module';

@Component({
  selector: 'app-third-year',
  templateUrl: './third-year.component.html',
  styleUrls: ['./third-year.component.scss']
})
export class ThirdYearComponent implements OnInit {
  firstSemester: ListItem[] = [
    {
      name: 'Structuri de date',
      lastUpdated: new Date('2/22/20'),
      icon: 'all_inclusive',
      link: '',
    },
    {
      name: 'Arhitectura calculatoarelor şi sisteme de operare',
      lastUpdated: new Date('2/22/20'),
      icon: 'all_inclusive',
      link: '',
    },
    {
      name: 'Logică pentru informatică',
      lastUpdated: new Date('2/22/20'),
      icon: 'all_inclusive',
      link: '',
    },
    {
      name: 'Matematică',
      lastUpdated: new Date('2/22/20'),
      icon: 'all_inclusive',
      link: '',
    },
    {
      name: 'Practica – Introducere în programare',
      lastUpdated: new Date('2/22/20'),
      icon: 'all_inclusive',
      link: '',
    },
    {
      name: 'Limba engleză I',
      lastUpdated: new Date('2/22/20'),
      icon: 'all_inclusive',
      link: '',
    },
  ];
  secondSemester: ListItem[] = [
    {
      name: 'Programare orientată-obiect',
      lastUpdated: new Date('2/22/20'),
      icon: 'all_inclusive',
      link: '',
    },
    {
      name: 'Sisteme de operare',
      lastUpdated: new Date('2/22/20'),
      icon: 'all_inclusive',
      link: '',
    },
    {
      name: 'Fundamente algebrice ale informaticii',
      lastUpdated: new Date('2/22/20'),
      icon: 'all_inclusive',
      link: '',
    },
    {
      name: 'Probabilităţi şi statistică',
      lastUpdated: new Date('2/22/20'),
      icon: 'all_inclusive',
      link: '',
    },
    {
      name: 'Proiectarea algoritmilor',
      lastUpdated: new Date('2/22/20'),
      icon: 'all_inclusive',
      link: '',
    },
    {
      name: 'Limba engleză II',
      lastUpdated: new Date('2/22/20'),
      icon: 'all_inclusive',
      link: '',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
