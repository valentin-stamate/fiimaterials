import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {FeedbackFromModel} from '../pages/home/components/feedback/feedback.from.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private firestore: AngularFirestore) { }

  onSubmitFeedback(feedback: FeedbackFromModel) {
     return this.firestore.collection(feedback.subject)
       .add({name:feedback.name, message: feedback.message, solved: false});
  }

}
