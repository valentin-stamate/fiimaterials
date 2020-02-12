import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {FeedbackModel} from '../model/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private firestore: AngularFirestore) { }

  createFeedback(feedback: FeedbackModel) {
     return this.firestore.collection('universityclasses-ae0d2')
       .add({name:feedback.name, option: feedback.option, message: feedback.message, solved: false});
  }

}
