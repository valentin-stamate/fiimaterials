export interface Class {
  count: number;
  name: string;
  short: string;
  credits: number;
  materials: string;
  site: string;
  password: string;
  type: string;
}

export interface Semester {
  semester: number;
  semesterCount: number;
  classes: Class[];
}

export interface Year {
  name: string;
  count: number;
  semesters: Semester[];
}

export interface AdditionalMaterials {
  contributor: string;
  link: string;
  about: string;

}

export interface Contributor {
  name: string,
  image: string,
  about:  string,
  roles: string[],
  action: string,
}
