import {Donation, SocialLink} from "./interfaces/interfaces";

export enum ClassType {
  NORMAL= 'Compulsory',
  OPTIONAL_1 = 'Optional 1',
  OPTIONAL_2 = 'Optional 2',
  OPTIONAL_3 = 'Optional 4',
  FACULTY = 'Optional',
}

export enum CycleType {
  BACHELORS = '0',
  MASTERS = '1',
  DOCTORAL = '2',
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/valstam20/',
    icon: 'fa-brands fa-facebook',
    color: 'text-blue-600',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/valentinstamate/',
    icon: 'fa-brands fa-instagram',
    color: 'text-rose-600',
  },
  {
    name: 'Github',
    link: 'https://github.com/valstam/',
    icon: 'fa-brands fa-square-github',
    color: 'text-gray-700',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/valentin-stamate/',
    icon: 'fa-brands fa-linkedin',
    color: 'text-sky-600',
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UCxyPvUUhzPqaJ8K8CZ_X_fA',
    icon: 'fa-brands fa-youtube',
    color: 'text-red-500',
  },
];

export const DONATIONS: Donation[] = [
  {
    name: 'ING',
    icon: 'fa-solid fa-building-columns',
    info: 'RO25INGB0000999908438976',
  },
  {
    name: 'Revolut',
    icon: 'fa-solid fa-registered',
    info: 'revolut.me/valentinst',
  }
];

export enum AdditionalResources {
  GRADUATION = 'https://drive.google.com/drive/folders/1jN3UOMbLdk0mTJiERwbcQz5_OX-xyL_c?usp=sharing',
  DOCS = 'https://drive.google.com/drive/folders/1wXnauHlZn43EbzEK3S1gjRP4hbQ_VruA?usp=sharing',
}
