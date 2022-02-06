export interface SidenavListItem {
  name: string;
  icon: string;
  route: string;
  active: boolean;
}

export enum ClassType {
  NORMAL,
  OPTIONAL_1,
  OPTIONAL_2,
  OPTIONAL_3,
  OPTIONAL_4,
  FACULTY,
}

export interface Class {
  name: string;
  short: string;
  credits: number
  about: string;

  materials: string;
  password: string;
  site: string;

  year: number;
  semester: number;

  type: number;

  updated: Date;
}

export interface Contributor {
  name: string;
  image: string;
  about: string;
  roles: string; // comma separated values
  action: string // action on click
}

export interface Feedback {
  name: string;
  feedback: string;
  response: string; // the response given to feedback
  implemented: boolean;
  date: Date;
}
