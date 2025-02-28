import {Class, Semester, Year} from "../interfaces/interfaces";
import {ClassType} from "../const";

export const FIRST_SEMESTER_CLASSES: Class[] = [
  {
    "count": 1,
    "name": "Computer Networks",
    "nameRo": "Retele de Calculatoare",
    "short": "RC",
    "credits": 6,
    "materials": "https://drive.google.com/drive/folders/1LsoKbfnrq6HR_8J7U1D897-tZOhfcaXz?usp=sharing",
    "photo": "https://i.postimg.cc/tTHDDV7x/0-ag-Cpexq1-Yrr-TD1-V.jpg",
    "site": "https://edu.info.uaic.ro/computer-networks/",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 2,
    "name": "Databases",
    "nameRo": "Baze de Date",
    "short": "BD",
    "credits": 6,
    "materials": "https://drive.google.com/drive/folders/1U94LDwW-mBUhra77nv--AWBYXa_MYcE0?usp=sharing",
    "photo": "https://i.postimg.cc/76sX3PJv/istockphoto-1254580063-612x612.jpg",
    "site": "https://edu.info.uaic.ro/baze-de-date/",
    "password": "student student@bd",
    "type": ClassType.NORMAL,
  },
  {
    "count": 3,
    "name": "Formal Languages, Automata and Compilers",
    "nameRo": "Limbaje Formale, Automate si Compilatoare",
    "short": "LFAC",
    "credits": 5,
    "materials": "https://drive.google.com/drive/folders/19Vq2t7oldAnwLhcckQRNbQS48nW-ZRq3?usp=sharing",
    "photo": "https://i.postimg.cc/xTSgLZc1/nightmare.jpg",
    "site": "https://edu.info.uaic.ro/limbaje-formale-automate-si-compilatoare/",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 4,
    "name": "Graph Algorithms",
    "nameRo": "Algoritmica Grafurilor",
    "short": "AGhe",
    "credits": 5,
    "materials": "https://drive.google.com/drive/folders/1SSPbBMtNCPBDYmhhIsm9b7ErUCu_4E0k?usp=sharing",
    "photo": "https://i.postimg.cc/NMkFSL7V/Contribution203-final-A.jpg",
    "site": "https://edu.info.uaic.ro/algoritmica-grafuri/",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 5,
    "name": "English Language III",
    "nameRo": "Engleza",
    "short": "Engleza",
    "credits": 4,
    "materials": "https://drive.google.com/drive/folders/1lhrFu6j2nmf8K75iESA4oUuZ8M1yN7Xk?usp=sharing",
    "photo": "https://i.postimg.cc/90kWJHHn/The-Bennu-Bird-Ancient-Egyptian-Symbols-Egypt-Tours-Portal.jpg",
    "site": "https://edu.info.uaic.ro/limba-engleza/",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 6,
    "name": "Rust Programming",
    "nameRo": "Programare in Rust",
    "short": "PR",
    "credits": 4,
    "materials": "",
    "photo": "https://i.ibb.co/yF8NHpx/rust-logo-2.png",
    "site": "https://gdt050579.github.io/rust_course_fii/",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 7,
    "name": "Computability, Decidability and Complexity",
    "nameRo": "Calculabilitate, Decidabilitate si Complexitate",
    "short": "CDC",
    "credits": 4,
    "materials": "",
    "photo": "https://i.postimg.cc/VLCQkp2s/beltjens-complex4-detail.jpg",
    "site": "https://www.flt-info.eu/course/cdc/",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 8,
    "name": "Principles of Programming Languages",
    "nameRo": "Principii ale Limbajelor de Programare",
    "short": "PLP",
    "credits": 4,
    "materials": "https://drive.google.com/drive/folders/1f2Gm4XZJh41Z9heiUDYkIW-HNLa0z61G?usp=sharing",
    "photo": "https://i.postimg.cc/Rh1Ycxmw/Yellowtail-Visual.jpg",
    "site": "https://edu.info.uaic.ro/principii-ale-limbajelor-de-programare/",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 9,
    "name": "Genetic Algorithms",
    "nameRo": "Algoritmi Genetici",
    "short": "AG",
    "credits": 4,
    "materials": "https://drive.google.com/drive/folders/1x01DY3RsVivtZMY5uN2GqC8rLFONMmH5?usp=sharing",
    "photo": "https://i.postimg.cc/Kc9B8sBW/1-siih-Fqh7-JHRel-P-2-Yy-Yq-VA.jpg",
    "site": "https://profs.info.uaic.ro/~eugennc/teaching/ga/",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 10,
    "name": "Quantum Computing",
    "nameRo": "Quantum Computing",
    "short": "QC",
    "credits": 4,
    "materials": "https://drive.google.com/drive/folders/1QGXi9Hwa8tgd8PbjYV6vA39c8KKQnKkk?usp=sharing",
    "photo": "https://i.postimg.cc/HsV5c4tk/istockphoto-1211223669-612x612.jpg",
    "site": "https://edu.info.uaic.ro/quantum-computing/",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 11,
    "name": "Competitive Programming",
    "nameRo": "Programare Competitiva",
    "short": "PC",
    "credits": 3,
    "materials": "",
    "photo": "https://i.postimg.cc/MGYqgQ8R/left-right-brain-science-colors-art-mentality-vector-illustration-flat-style-204797622.jpg",
    "site": "https://edu.info.uaic.ro/programare-competitiva/",
    "password": "",
    "type": ClassType.FACULTY,
  },
  {
    "count": 12,
    "name": "Physical Education",
    "nameRo": "Educatie Fizica",
    "short": "Sport",
    "credits": 1,
    "materials": "",
    "photo": "https://i.postimg.cc/C5R0ZrnH/2014-muhammad-ali-sonny-liston-demaryius-thomas-richesson-sports-art-1200x900.jpg",
    "site": "",
    "password": "",
    "type": ClassType.FACULTY,
  },
  {
    "count": 13,
    "name": "Industry Training I",
    "nameRo": "Practica in Industrie",
    "short": "Practica",
    "credits": 3,
    "materials": "",
    "photo": "https://i.postimg.cc/c423QgDM/detroit-industry-north-wall-diego-rivera.jpg",
    "site": "",
    "password": "",
    "type": ClassType.FACULTY,
  },
];

const SECOND_SEMESTER_CLASSES: Class[] = [
  {
    "count": 1,
    "name": "WEB Technologies",
    "nameRo": "Tehnologii WEB",
    "short": "TW",
    "credits": 6,
    "materials": "https://drive.google.com/drive/folders/15U8e-o7CaWkeLIYZ5QAgpbY_75ayeFfc?usp=sharing",
    "photo": "https://i.postimg.cc/3rgwnVQR/web.jpg",
    "site": "https://edu.info.uaic.ro/web-technologies/",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 2,
    "name": "Advanced Programming",
    "nameRo": "Programare Avansata",
    "short": "PA",
    "credits": 5,
    "materials": "https://drive.google.com/drive/folders/12v6JRdIPM0oaErXhjyA329BNTZpOVeGJ?usp=sharing",
    "photo": "https://i.postimg.cc/VNxYFB7n/java.png",
    "site": "https://edu.info.uaic.ro/programare-avansata/",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 3,
    "name": "Software Engineering",
    "nameRo": "Inginerie Software",
    "short": "IS",
    "credits": 6,
    "materials": "https://drive.google.com/drive/folders/1ZVzgJkEA9t6It4iVK1I9iEEKDWXXl5tU?usp=sharing",
    "photo": "https://i.postimg.cc/HxbTvcKK/ip.jpg",
    "site": "https://edu.info.uaic.ro/ingineria-programarii/Scoala/2025/SE/index.html",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 4,
    "name": "DBMS Practice",
    "nameRo": "Practica SGBD",
    "short": "SGBD",
    "credits": 4,
    "materials": "https://drive.google.com/drive/folders/1I9tYqRR2LVjfTRtbR98oFbi1IAtJv001?usp=sharing",
    "photo": "https://i.postimg.cc/x1dTjdJJ/dbms.jpg",
    "site": "https://edu.info.uaic.ro/practica-sisteme-gestiune-baze-de-date/ro/index.html",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 5,
    "name": "English Language IV",
    "nameRo": "Engleza",
    "short": "Engleza",
    "credits": 4,
    "materials": "",
    "photo": "https://i.postimg.cc/90kWJHHn/The-Bennu-Bird-Ancient-Egyptian-Symbols-Egypt-Tours-Portal.jpg",
    "site": "",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 6,
    "name": "Functional Programming",
    "nameRo": "Programare Functionala",
    "short": "PF",
    "credits": 5,
    "materials": "",
    "photo": "https://i.postimg.cc/5Nb2Ggfm/pf.png",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 7,
    "name": "Introduction to Cryptography",
    "nameRo": "Introducere in Criptografie",
    "short": "Crypto",
    "credits": 5,
    "materials": "",
    "photo": "https://i.postimg.cc/Kvf8yTzh/crypto.jpg",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 8,
    "name": "Entrepreneurship and Innovation in IT",
    "nameRo": "Antreprenoriat si Inovare in IT",
    "short": "AIIT",
    "credits": 5,
    "materials": "https://drive.google.com/drive/folders/1xgFBC9VuQzuaRQ4_sTHO5w-hS_BaBh_m?usp=sharing",
    "photo": "https://i.postimg.cc/BnwZjGHh/antreprenorship.jpg",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 9,
    "name": "Embedded Systems",
    "nameRo": "Sisteme Embedded",
    "short": "SE",
    "credits": 5,
    "materials": "https://drive.google.com/drive/folders/1tIkRODK2_j5R66uMCIquUNdoeblkz1gJ?usp=sharing",
    "photo": "https://i.postimg.cc/SK2S8tGm/embedded.jpg",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 10,
    "name": "Competitive Programming",
    "nameRo": "Programare Competitiva",
    "short": "PC",
    "credits": 3,
    "materials": "",
    "photo": "https://i.postimg.cc/MGYqgQ8R/left-right-brain-science-colors-art-mentality-vector-illustration-flat-style-204797622.jpg",
    "site": "",
    "password": "",
    "type": ClassType.FACULTY,
  },
  {
    "count": 11,
    "name": "Physical Education",
    "nameRo": "Educatie Fizica",
    "short": "Sport",
    "credits": 1,
    "materials": "",
    "photo": "https://i.postimg.cc/C5R0ZrnH/2014-muhammad-ali-sonny-liston-demaryius-thomas-richesson-sports-art-1200x900.jpg",
    "site": "",
    "password": "",
    "type": ClassType.FACULTY,
  },
];

const FIRST_SEMESTER: Semester = {
  semester: 1,
  semesterCount: 3,
  classes: FIRST_SEMESTER_CLASSES,
};

const SECOND_SEMESTER: Semester = {
  semester: 2,
  semesterCount: 4,
  classes: SECOND_SEMESTER_CLASSES,
};

export const B_SECOND_YEAR: Year = {
  name: 'Second Year',
  count: 2,
  semesters: [
    FIRST_SEMESTER,
    SECOND_SEMESTER,
  ]
};
