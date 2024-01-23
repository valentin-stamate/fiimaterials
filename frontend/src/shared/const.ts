import {AdditionalMaterials, Contributor, Donation, SocialLink} from "./interfaces/interfaces";

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
    link: 'https://www.facebook.com/valentin.stamate.125/',
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
    link: 'https://github.com/valentin-stamate/',
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

export enum Roles {
  MATERIAL_KEEPER = 'Materials Keeper',
  DEVELOPER = 'Developer',
  CONTRIBUTOR = 'Contributor',
  FOUNDER = 'Founder',
}

export const CONTRIBUTORS: Contributor[] = [
  {
    name: 'Stamate Valentin',
    image: 'https://i.postimg.cc/jq4kpLvj/profile-old.jpg',
    about: 'It was a random personal project that I never thought it would became something. I made it with passion ' +
      'and I learned a lot from it.',
    roles: [Roles.FOUNDER, Roles.DEVELOPER, Roles.MATERIAL_KEEPER],
    link: '',
    contributionDates: ['2020-02-06T00:00:00.000Z', '2024-01-23T00:00:00.000Z'],
  },
  {
    name: 'logalex96',
    image: 'https://i.postimg.cc/L4gQdBJt/6248839.jpg',
    about: 'He is the one who started collecting these materials, so as an inspiration he deserves the credits. He has all materials so I strongly recommend going to his repository and give him a star.',
    roles: [Roles.MATERIAL_KEEPER],
    link: 'https://github.com/logalex96/UAIC-Informatica-Iasi',
    contributionDates: ['2017-06-30T00:00:00.000Z', '2020-02-06T00:00:00.000Z'],
  },
  {
    name: 'Andrei',
    image: 'https://i.postimg.cc/pd1z2YDM/brain.png',
    about: 'Curly brain',
    roles: [Roles.MATERIAL_KEEPER],
    link: 'https://mega.nz/folder/5x5HHY7Q#OxUD5Ued1hdWkixDZ78EcA',
    contributionDates: ['2020-11-02T00:00:00.000Z', '2020-06-02T00:00:00.000Z'],
  },
  {
    name: 'Malina Andrei',
    image: 'https://i.postimg.cc/rmk1vW3J/IMG-2489.jpg',
    about: 'She is a student at Faculty of computer science in the second year. I never met her in person but I’m sure she’s a nice person. Her materials contain exams, which are very useful.',
    roles: [Roles.MATERIAL_KEEPER],
    link: 'https://drive.google.com/drive/folders/1rqqtD4NlTBq_SCMRcQNxWiYjsu0xquub?usp=sharing',
    contributionDates: ['2020-02-06T00:00:00.000Z'],
  },
  {
    name: 'Teodor Lupu',
    image: 'https://i.postimg.cc/bNRTxRgn/107896230-3009973232562367-622850097654184659-o.jpg',
    about: 'He contributed with math session exams in year 2020-2021.',
    roles: [Roles.CONTRIBUTOR],
    link: '',
    contributionDates: ['2020-02-25T00:00:00.000Z'],
  },
  {
    name: 'Laurul Balaurul',
    image: 'https://i.postimg.cc/3xdvkjcY/drakon-plamya-ogon.jpg',
    about: 'The contribution of this creature was some exam models. He was often seen in C2 sometimes with the guitar guy "la o tigara si-un energizant".',
    roles: [Roles.CONTRIBUTOR],
    link: '',
    contributionDates: ['2022-02-27T00:00:00.000Z'],
  },
  {
    name: 'Segmentation Fault',
    image: 'https://i.postimg.cc/gk0w7qd8/segm-fault.jpg',
    about: 'His contribution was some exams models. His worst enemies are the C programming language and operating systems.',
    roles: [Roles.CONTRIBUTOR],
    link: '',
    contributionDates: ['2021-02-25T00:00:00.000Z'],
  },
];

export const MORE_MATERIALS: AdditionalMaterials[] = [
  {
    contributor: 'Amalia',
    link: 'https://mega.nz/folder/gOlgVbJI#rW9cUCdjVKOMQTfX-vPefg',
    about: 'A personal archive with new materials',
    smallText: '2022-2025'
  },
  {
    contributor: 'logalex96',
    link: 'https://bit.ly/2S8h9cO',
    about: 'A complete archive with many materials',
    smallText: '2016-2019',
  },
  {
    contributor: 'Info3bNecenzurat',
    link: 'https://info3bnecenzurat.wordpress.com/',
    about: 'Legacy archive',
    smallText: '2009',
  },
];
