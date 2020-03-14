import { Component, OnInit } from '@angular/core';
import {Themeswitcher} from '../../services/themeswitcher';
import {FeedbackService} from '../../services/feedback.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FeedbackFromModel} from '../../model/feedback.from.model';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  providers: []
})
export class FeedbackComponent implements OnInit {
  sectionTitle = 'Feedback';
  feedbackForm: FeedbackFromModel;

  feedbackFormGroup = new FormGroup({
    name: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  });

  constructor(public themeSwitcher: Themeswitcher, private feedbackService: FeedbackService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
   this.feedbackForm = new FeedbackFromModel();
  }

  onSubmitFeedback() {
    const success = 'Feedback trimis!';
    const fail = 'Eroare la trimiterea feedback-ului';

    this.getFromData();

    if(this.feedbackForm.name === '') {
      this.feedbackForm.name = 'Unknown';
    }
    if(this.feedbackForm.message.length < 8) {
      this.openToast('Introduceti minim 8 caractere');
      return false;
    }
    if(this.feedbackForm.subject === '') {
      this.feedbackForm.subject = 'Unknown';
    }

    try {
      this.feedbackService.onSubmitFeedback(this.feedbackForm);
    } catch (e) {
      this.openToast(fail);
      return false;
    }

    this.feedbackFormGroup.reset();

    this.openToast(success);
  }

  openToast(message: string) {
    this.snackBar.open(message, 'Close', {duration: 2000});
  }

  private getFromData() {
    this.feedbackForm.name = this.feedbackFormGroup.value.name;
    this.feedbackForm.subject = this.feedbackFormGroup.value.subject;
    this.feedbackForm.message = this.feedbackFormGroup.value.message;
  }

}
