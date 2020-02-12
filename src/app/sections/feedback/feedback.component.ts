import { Component, OnInit } from '@angular/core';
import {ThemeSwitcher} from '../../services/ThemeSwitcher';
import {FeedbackService} from '../../services/feedback.service';
import {FeedbackModel} from '../../model/feedback.model';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  providers: []
})
export class FeedbackComponent implements OnInit {
  sectionTitle = 'Feedback';
  feedBack: FeedbackModel = new FeedbackModel();

  constructor(public themeSwitcher: ThemeSwitcher, private feedbackService: FeedbackService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  sendFeedback() {
    const success = 'Feedback trimis!';
    const fail = 'Eroare la trimiterea feedback-ului';

    if(this.feedBack.name === '') {
      this.feedBack.name = 'Unknown';
    }
    if(this.feedBack.message.length < 8) {
      this.openToast('Introduceti minim 8 caractere');
      return false;
    }

    let result;
    try {
      result = this.feedbackService.createFeedback(this.feedBack);
    } catch (e) {
      this.openToast(fail);
      return false;
    }

    this.openToast(success);
    return result;

  }

  openToast(message: string) {
    this.snackBar.open(message, 'Close', {duration: 2000});
  }

  // fast way of doing this
  siteDesign() {
    this.feedBack.option = 'Aspect Site';
  }
  newSelection() {
    this.feedBack.option = 'Selectie Noua';
  }
  somethingElse() {
    this.feedBack.option = 'Another';
  }
  contact() {
    this.feedBack.option = 'Contact';
  }

}
