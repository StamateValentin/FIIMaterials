import {Class, Semester, Year} from "../interfaces/interfaces";
import {ClassType} from "../const";

export const FIRST_SEMESTER_CLASSES: Class[] = [
  {
    "count": 1,
    "name": "Computer Networks",
    "nameRo": "Retele de Calculatoare",
    "short": "RC",
    "credits": 6,
    "materials": "https://drive.google.com/drive/folders/1iPF-mpepjSmJ15pblopIpPl0mQWdtp1F?usp=sharing",
    "photo": "https://i.postimg.cc/tTHDDV7x/0-ag-Cpexq1-Yrr-TD1-V.jpg",
    "site": "https://profs.info.uaic.ro/~computernetworks/cursullaboratorul.php",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 2,
    "name": "Databases",
    "nameRo": "Baze de Date",
    "short": "BD",
    "credits": 6,
    "materials": "https://drive.google.com/drive/folders/1rSWdn-ctlKGOF-T9s92Dzu-9Wh7-tixb?usp=sharing",
    "photo": "https://i.postimg.cc/76sX3PJv/istockphoto-1254580063-612x612.jpg",
    "site": "https://profs.info.uaic.ro/~bd/wiki/index.php/Pagina_principal%C4%83",
    "password": "student student@bd",
    "type": ClassType.NORMAL,
  },
  {
    "count": 3,
    "name": "Formal Languages, Automata and Compilers",
    "nameRo": "Limbaje Formale, Automate si Compilatoare",
    "short": "LFAC",
    "credits": 5,
    "materials": "https://drive.google.com/drive/folders/15ntNZw4OCMu4LKHGCKxIbWRBObzU8p26?usp=sharing",
    "photo": "https://i.postimg.cc/xTSgLZc1/nightmare.jpg",
    "site": "https://profs.info.uaic.ro/~otto/lfac.html",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 4,
    "name": "Graph Algorithms",
    "nameRo": "Algoritmica Grafurilor",
    "short": "AGhe",
    "credits": 5,
    "materials": "https://drive.google.com/drive/folders/1-xAN-QuBSrsPRRLRQ2tvI5UlZjYphLSC?usp=sharing",
    "photo": "https://i.postimg.cc/NMkFSL7V/Contribution203-final-A.jpg",
    "site": "https://profs.info.uaic.ro/~olariu/curent/AG/AG_ro.html",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 5,
    "name": "English Language III",
    "nameRo": "Engleza",
    "short": "Engleza",
    "credits": 4,
    "materials": "https://drive.google.com/drive/folders/1_FvFwTZqvYcQoyblnaSTFRkJ6252Ghz7?usp=sharing",
    "photo": "https://i.postimg.cc/90kWJHHn/The-Bennu-Bird-Ancient-Egyptian-Symbols-Egypt-Tours-Portal.jpg",
    "site": "https://profs.info.uaic.ro/~augusto.perez",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 6,
    "name": "Computability, Decidability and Complexity",
    "nameRo": "Calculabilitate, Decidabilitate si Complexitate",
    "short": "CDC",
    "credits": 4,
    "materials": "",
    "photo": "https://i.postimg.cc/VLCQkp2s/beltjens-complex4-detail.jpg",
    "site": "https://profs.info.uaic.ro/~fltiplea/CDC/CDC.html",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 7,
    "name": "Principles of Programming Languages",
    "nameRo": "Principii ale Limbajelor de Programare",
    "short": "PLP",
    "credits": 4,
    "materials": "https://drive.google.com/drive/folders/13acftGiJRp_eA2YLJYxHynsAEb_WWhbe?usp=sharing",
    "photo": "https://i.postimg.cc/Rh1Ycxmw/Yellowtail-Visual.jpg",
    "site": "https://profs.info.uaic.ro/~arusoaie.andrei/lectures/PLP/2020/plp.html",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 8,
    "name": "Genetic Algorithms",
    "nameRo": "Algoritmi Genetici",
    "short": "AG",
    "credits": 4,
    "materials": "https://drive.google.com/drive/folders/1wp2JXtFvSRuPk87jPA4vmpKjRhMSwELI?usp=sharing",
    "photo": "https://i.postimg.cc/Kc9B8sBW/1-siih-Fqh7-JHRel-P-2-Yy-Yq-VA.jpg",
    "site": "https://profs.info.uaic.ro/~eugennc/teaching/ga/",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 9,
    "name": "Quantum Computing",
    "nameRo": "Quantum Computing",
    "short": "QC",
    "credits": 4,
    "materials": "",
    "photo": "https://i.postimg.cc/HsV5c4tk/istockphoto-1211223669-612x612.jpg",
    "site": "https://profs.info.uaic.ro/~andreea.arusoaie/QC.html",
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
    "site": "https://students.info.uaic.ro/~alexandru.ionita/pc/index.html",
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
  {
    "count": 12,
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
    "materials": "https://drive.google.com/drive/folders/1HLmcbViVHlMkZYTLHf_NlZrakzxi7vQV?usp=sharing",
    "photo": "",
    "site": "https://profs.info.uaic.ro/~busaco/teach/courses/web/",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 2,
    "name": "Advanced Programming",
    "nameRo": "Programare Avansata",
    "short": "PA",
    "credits": 5,
    "materials": "https://drive.google.com/drive/folders/1vRIzxB35MMVepnDV0hVcCp4j-EkOn44e?usp=sharing",
    "photo": "",
    "site": "https://profs.info.uaic.ro/~acf/java/",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 3,
    "name": "Software Engineering",
    "nameRo": "Inginerie Software",
    "short": "IS",
    "credits": 6,
    "materials": "https://drive.google.com/drive/folders/160DCciXtVZu4pJgKCMEhhRPL8szqiwvr?usp=sharing",
    "photo": "",
    "site": "https://profs.info.uaic.ro/~adiftene/Scoala/2021/IP/index.html",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 4,
    "name": "DBMS Practice",
    "nameRo": "Practica SGBD",
    "short": "SGBD",
    "credits": 4,
    "materials": "https://drive.google.com/drive/folders/1lqiN0Teu9J4kNeO6vFo3SAJ7oVzDDXSB?usp=sharing",
    "photo": "",
    "site": "",
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
    "photo": "",
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
    "photo": "",
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
    "materials": "https://drive.google.com/drive/folders/1jIbum7CMCuhx8h-ms6ePcGASOmc-PwXI?usp=sharing",
    "photo": "",
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
    "materials": "https://drive.google.com/drive/folders/1ZLyvKKJJpC2iNK_JX9-JohaZ2ylSN9b5?usp=sharing",
    "photo": "",
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
