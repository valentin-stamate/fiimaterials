export interface Semester {
  year: string;
  title: string;
  classes: Class[];
}

export interface Class {
  title: string;
  short: string;
  link: string;
  description: string;
  coverUrl: string;
}
