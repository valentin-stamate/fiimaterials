import { Component, OnInit } from '@angular/core';
import {ThemeSwitcher} from '../../services/ThemeSwitcher';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  sectionTitle = 'Feedback';

  constructor(public themeSwitcher: ThemeSwitcher) { }

  ngOnInit(): void {
  }

}
