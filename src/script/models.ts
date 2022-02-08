export interface SidenavListItem {
  name: string;
  icon: string;
  route: string;
}

export enum ClassType {
  NORMAL,
  OPTIONAL_1,
  OPTIONAL_2,
  OPTIONAL_3,
  OPTIONAL_4,
  FACULTY,
}

export enum Roles {
  DEVELOPER = 'developer',
  MATERIAL_KEEPER = 'material keeper',
  CONTRIBUTOR = 'contributor',
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
  roles: string[]; // comma separated values
  action: string // action on click
}

export interface Material {
  owner: string;
  link: string;
  about: string;
}
