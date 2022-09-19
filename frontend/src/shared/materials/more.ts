import {AdditionalMaterials, Contributor} from "../interfaces/interfaces";

export enum Roles {
  MATERIAL_KEEPER = 'Materials Keeper',
  DEVELOPER = 'Developer',
  CONTRIBUTOR = 'Contributor',
  FOUNDER = 'Founder',
}

export const CONTRIBUTORS: Contributor[] = [
  {
    name: 'logalex96',
    image: 'https://i.postimg.cc/L4gQdBJt/6248839.jpg',
    about: 'He is the one who started collecting these materials, so as an inspiration he deserves the credits. He has all materials so I strongly recommend going to his repository and give him a star.',
    roles: [Roles.MATERIAL_KEEPER],
    link: 'https://github.com/logalex96/UAIC-Informatica-Iasi',
    contributionDates: ['2017-06-30T00:00:00.000Z', '2020-02-06T00:00:00.000Z'],
  },
  {
    name: 'Stamate Valentin',
    image: 'https://i.postimg.cc/8CpyFScg/me.jpg',
    about: 'I never met this guy before.',
    roles: [Roles.FOUNDER, Roles.DEVELOPER, Roles.MATERIAL_KEEPER],
    link: '',
    contributionDates: ['2020-02-06T00:00:00.000Z', 'present'],
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
    contributor: 'logalex96',
    link: 'https://bit.ly/2S8h9cO',
    about: 'A complete archive with many materials',
  },
  {
    contributor: 'Info3bNecenzurat',
    link: 'https://info3bnecenzurat.wordpress.com/',
    about: 'Legacy archive',
  },
];
