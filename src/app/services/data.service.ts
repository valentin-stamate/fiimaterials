import {classesJson} from '../json/classes.json';
import {usefulLinks} from '../json/useful-links.json';

export class DataService {
  classes;
  usefulLinks: {title, link}[] = [];
  constructor() {
    this.classes = classesJson;
    this.usefulLinks = usefulLinks;
  }
}
