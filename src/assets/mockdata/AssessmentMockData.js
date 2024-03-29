export const assessmentQuestions = [
  {
    questionId: 1,
    questiontype: "mcq",
    questions: [
      {
        question:
          "Which Set class should be most popular in a multi-threading environment,considering performance constraint?",
        options: [
          {
            option: "HashSet",
            isCorrect: true,
          },
          {
            option: "LinkedHashSet",
          },
          {
            option: "ConcurrentSkipListSet",
            isCorrect: false,
          },
          {
            option: "CopyOnWriteArraySet",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    questionId: 2,
    questiontype: "coding",
    questions: [
      {
        question:
          "Which Set class should be most popular in a multi-threading environment,considering performance constraint?",
        options: [
          {
            option: "Hash Set",
            isCorrect: true,
          },
          {
            option: "Linked Hash Set",
          },
          {
            option: "Concurrent Skip ListSet",
            isCorrect: true,
          },
          {
            option: "CopyOnWriteArraySet",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    questionId: 3,
    questiontype: "mcq",
    questions: [
      {
        question:
          "Which Set class should be most popular in a multi-threading environment,considering performance constraint?",
        options: [
          {
            option: "HashSet",
            isCorrect: true,
          },
          {
            option: "LinkedHashSet",
          },
          {
            option: "ConcurrentSkipListSet",
            isCorrect: true,
          },
          {
            option: "CopyOnWriteArraySet",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    questionId: 1,
    questiontype: "choose",
    questions: [
      {
        question:
          "Which Set class should be most popular in a multi-threading environment,considering performance constraint?",
        options: [
          {
            option: "HashSet",
            isCorrect: true,
          },
          {
            option: "LinkedHashSet",
          },
          {
            option: "ConcurrentSkipListSet",
          },
          {
            option: "CopyOnWriteArraySet",
            isCorrect: false,
          },
        ],
      },
      {
        question:
          "Which Set class should be most popular in a multi-threading environment,considering performance constraint?",
        options: [
          {
            option: "HashSet",
            isCorrect: true,
          },
          {
            option: "LinkedHashSet",
          },
          {
            option: "ConcurrentSkipListSet",
          },
          {
            option: "CopyOnWriteArraySet",
            isCorrect: false,
          },
        ],
      },
    ],
    media: {
      type: "video",
      src: "https://global-s3.s3.us-west-2.amazonaws.com/panlearn_intro.mp4",
    },
  },
];

export const assessmentPreviewData = [
  {
    title: "analytics",
    previewId: 1,
    category: "behavioural",
    topic: "pscometrics",
    subtopic: "Disc",
    level: "medium",
    tags: "Software Developer, C# Developer",
    jobrole: "frontend developer",
    createdon: "11 August 2022",
    createdby: "Vignesh Nagarajan",
    questionId: 1,
  },
  {
    title: "python",
    previewId: 2,
    category: "cognitive",
    topic: "pscometrics",
    subtopic: "Disc",
    level: "medium",
    tags: "Software Developer, C# Developer,AI developer",
    jobrole: "backend developer",
    createdon: "11 August 2022",
    createdby: "yuvaraj Nagarajan",
    questionId: 1,
  },
  {
    title: "resoning",
    previewId: 3,
    category: "analytics",
    topic: "pscometrics",
    subtopic: "Disc",
    level: "hard",
    tags: "Software Developer, C# Developer",
    jobrole: "UI developer",
    createdon: "18 August 2022",
    createdby: "swathy Nagarajan",
    questionId: 2,
  },
  {
    title: "english_communication",
    category: "behavioural",
    topic: "pscometrics",
    previewId: 4,
    subtopic: "Disc",
    level: "easy",
    tags: "Software Developer, C# Developer,java developer",
    jobrole: "Java developer",
    createdon: "11 july 2022",
    questionId: 3,
    createdby: "vijay venkat",
  },
  {
    title: "english_Communication",
    category: "Managing",
    previewId: 5,
    topic: "pscometrics",
    subtopic: "Disc",
    level: "hard",
    tags: "manageral,communication",
    jobrole: "Test manager",
    createdon: "30 February 2022",
    questionId: 3,
    createdby: "jananan P",
  },
];

export const candidateMockData = [
  {
    id: 1,
    name: "Terry Medhurst",
    profile: "https://robohash.org/hicveldicta.png",
    email: "atuny0@sohu.com",
    role: "Help Desk Operator",
    department: "Marketing",
    phone: "+63 791 675 8914",
    status: "Not Yet Started",
    lastworking: "15 August 2022",
    experience: "2",
    assessmentIds: [1, 2, 8],
  },
  {
    id: 2,
    name: "Sheldon Quigley",
    profile: "https://robohash.org/doloremquesintcorrupti.png",
    email: "hbingley1@plala.or.jp",
    role: "Senior Cost Accountant",
    department: "Services",
    phone: "+7 813 117 7139",
    status: "Not Assigned",
    lastworking: "25 August 2021",
    experience: "3",
    assessmentIds: [11, 12, 15],
  },
  {
    id: 3,
    name: "Terrill Hills",
    profile: "https://robohash.org/consequunturautconsequatur.png",
    email: "rshawe2@51.la",
    role: "Mechanical Systems Engineer",
    department: "Marketing",
    phone: "+63 739 292 7942",
    status: "completed",
    lastworking: "15 August 2022",
    experience: "9",
    assessmentIds: [3, 4, 5],
  },
  {
    id: 4,
    name: "Miles Cummerata",
    profile: "https://robohash.org/facilisdignissimosdolore.png",
    email: "yraigatt3@nature.com",
    role: "Paralegal",
    department: "Business Development",
    phone: "+86 461 145 4186",
    status: "ongoing",
    lastworking: "15 August 2022",
    experience: "2",
    assessmentIds: [5, 6, 7],
  },
  {
    id: 5,
    name: "Mavis Schultz",
    profile: "https://robohash.org/adverovelit.png",
    email: "kmeus4@upenn.edu",
    role: "Web Developer I",
    department: "Support",
    phone: "+372 285 771 1911",
    status: "Not Yet Started",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 6,
    name: "Alison Reichert",
    profile: "https://robohash.org/laboriosamfacilisrem.png",
    email: "jtreleven5@nhs.uk",
    role: "Civil Engineer",
    department: "Accounting",
    phone: "+351 527 735 3642",
    status: "ongoing",
    lastworking: "10 jan 2022",
    experience: "10",
    assessmentIds: [12, 9, 13, 11, 14],
  },
  {
    id: 7,
    name: "Oleta Abbott",
    profile: "https://robohash.org/cupiditatererumquos.png",
    email: "dpettegre6@columbia.edu",
    role: "Sales Associate",
    department: "Product Management",
    phone: "+62 640 802 7111",
    status: "Not Assigned",
    lastworking: "5 july 2022",
    experience: "15",
    assessmentIds: [12, 9, 10, 11, 15],
  },
  {
    id: 8,
    name: "Ewell Mueller",
    profile: "https://robohash.org/quiaharumsapiente.png",
    email: "ggude7@chron.com",
    role: "Clinical Specialist",
    department: "Services",
    phone: "+86 946 297 2275",
    status: "Not Assigned",
    lastworking: "25 june 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 8,
    name: "Demetrius Corkery",
    profile: "https://robohash.org/excepturiiuremolestiae.png",
    email: "nloiterton8@aol.com",
    role: "Community Outreach Specialist",
    department: "Human Resources",
    phone: "+86 356 590 9727",
    status: "ongoing",
    lastworking: "15 feb 2022",
    experience: "5",
    assessmentIds: [4, 1, 10, 11, 15],
  },
  {
    id: 9,
    name: "Eleanora Price",
    profile: "https://robohash.org/aliquamcumqueiure.png",
    email: "umcgourty9@jalbum.net",
    role: "Senior Sales Associate",
    department: "Marketing",
    phone: "+60 184 408 0824",
    status: "Not Yet Started",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 10,
    name: "Marcel Jones",
    profile: "https://robohash.org/impeditautest.png",
    email: "acharlota@liveinternet.ru",
    role: "Account Executive",
    department: "Business Development",
    phone: "+967 253 210 0344",
    status: "ongoing",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 11,
    name: "Assunta Rath",
    profile: "https://robohash.org/namquaerataut.png",
    email: "rhallawellb@dropbox.com",
    role: "Developer II",
    department: "Product Management",
    phone: "+380 962 542 6549",
    status: "Not Yet Started",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 12,
    name: "Trace Douglas",
    profile: "https://robohash.org/voluptatemsintnulla.png",
    email: "lgribbinc@posterous.com",
    role: "Sales Associate",
    department: "Research and Development",
    phone: "+1 609 937 3468",
    status: "completed",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 13,
    name: "Enoch Lynch",
    profile: "https://robohash.org/quisequienim.png",
    email: "mturleyd@tumblr.com",
    role: "Professor",
    department: "Sales",
    phone: "+94 912 100 5118",
    status: "Not Assigned",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 14,
    name: "Jeanne Halvorson",
    profile: "https://robohash.org/autquiaut.png",
    email: "kminchelle@qq.com",
    role: "Software Test Engineer IV",
    department: "Marketing",
    phone: "+86 581 108 7855",
    status: "ongoing",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 15,
    name: "Trycia Fadel",
    profile: "https://robohash.org/porronumquamid.png",
    email: "dpierrof@vimeo.com",
    role: "Geological Engineer",
    department: "Research and Development",
    phone: "+420 833 708 0340",
    status: "Not Assigned",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 16,
    name: "Bradford Prohaska",
    profile: "https://robohash.org/accusantiumvoluptateseos.png",
    email: "vcholdcroftg@ucoz.com",
    role: "Operator",
    department: "Sales",
    phone: "+420 874 628 3710",
    status: "Not Yet Started",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 17,
    name: "Arely Skiles",
    profile: "https://robohash.org/nihilharumqui.png",
    email: "sberminghamh@chron.com",
    role: "VP Accounting",
    department: "Support",
    phone: "+55 886 766 8617",
    status: "ongoing",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 18,
    name: "Gust Purdy",
    profile: "https://robohash.org/delenitipraesentiumvoluptatum.png",
    email: "bleveragei@so-net.ne.jp",
    role: "Financial Analyst",
    department: "Sales",
    phone: "+86 886 889 0258",
    status: "Not Assigned",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 19,
    name: "Lenna Renner",
    profile: "https://robohash.org/ipsumutofficiis.png",
    email: "aeatockj@psu.edu",
    role: "Geologist III",
    department: "Support",
    phone: "+1 904 601 7177",
    status: "completed",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 20,
    name: "Doyle Ernser",
    profile: "https://robohash.org/providenttemporadelectus.png",
    email: "ckensleyk@pen.io",
    role: "Programmer Analyst I",
    department: "Product Management",
    phone: "+86 634 419 6839",
    status: "Not Assigned",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 21,
    name: "Tressa Weber",
    profile: "https://robohash.org/temporarecusandaeest.png",
    email: "froachel@howstuffworks.com",
    role: "VP Quality Control",
    department: "Research and Development",
    phone: "+34 517 104 6248",
    status: "Not Yet Started",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 22,
    name: "Felicity O'Reilly",
    profile: "https://robohash.org/odioquivero.png",
    email: "beykelhofm@wikispaces.com",
    role: "Assistant Manager",
    department: "Legal",
    phone: "+63 919 564 1690",
    status: "Not Assigned",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 23,
    name: "Jocelyn Schuster",
    profile: "https://robohash.org/odiomolestiaealias.png",
    email: "brickeardn@fema.gov",
    role: "Research Nurse",
    department: "Product Management",
    phone: "+7 968 462 1292",
    status: "completed",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 24,
    name: "Edwina Ernser",
    profile: "https://robohash.org/doloremautdolores.png",
    email: "dfundello@amazon.co.jp",
    role: "Cost Accountant",
    department: "Marketing",
    phone: "+86 376 986 8945",
    status: "Not Yet Started",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 25,
    name: "Griffin Braun",
    profile: "https://robohash.org/laboriosammollitiaut.png",
    email: "lgronaverp@cornell.edu",
    role: "Senior Cost Accountant",
    department: "Engineering",
    phone: "+62 511 790 0161",
    status: "completed",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
  {
    id: 26,
    name: "Piper Schowalter",
    profile: "https://robohash.org/nequeodiosapiente.png",
    email: "fokillq@amazon.co.jp",
    role: "Sales Representative",
    department: "Human Resources",
    phone: "+60 785 960 7918",
    status: "Not Assigned",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15, 1, 2, 3],
  },
  {
    id: 27,
    name: "Kody Terry",
    profile: "https://robohash.org/consequunturabnon.png",
    email: "xisherwoodr@ask.com",
    role: "Recruiting Manager",
    department: "Support",
    phone: "+81 859 545 8951",
    status: "completed",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15, 6, 7, 9],
  },
  {
    id: 28,
    name: "Macy Greenfelder",
    profile: "https://robohash.org/amettemporeea.png",
    email: "jissetts@hostgator.com",
    role: "Structural Analysis Engineer",
    department: "Product Management",
    phone: "+81 915 649 2384",
    status: "Not Assigned",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15, 3, 9, 10],
  },
  {
    id: 29,
    name: "Maurine Stracke",
    profile: "https://robohash.org/perferendisideveniet.png",
    email: "kdulyt@umich.edu",
    role: "Quality Engineer",
    department: "Support",
    phone: "+48 143 590 6847",
    status: "Not Yet Started",
    lastworking: "5 jan 2022",
    experience: "5",
    assessmentIds: [8, 9, 10, 11, 15],
  },
];

export const assessmentMockData = [
  {
    title: "Numerical Reasoning test",
    domain: "cognitive",
    type: "MCQ",
    assigneddate: "12 August 2022",
    attempteddate: "20 August 2022",
    id: 1,
  },
  {
    title: "Analytics",
    domain: "cognitive",
    type: "MCQ",
    assigneddate: "12 August 2022",
    attempteddate: "20 September 2022",
    id: 2,
  },
  {
    title: "Vineland Adaptive Behavior Scales",
    domain: "cognitive",
    type: "MCQ",
    assigneddate: "12 August 2022",
    compilationdate: "10 june 2022",
    id: 3,
  },
  {
    title: "Reasoning test",
    domain: "cognitive",
    type: "MCQ",
    assigneddate: "12 August 2022",
    attempteddate: "4 August 2022",
    id: 4,
  },
  {
    title: "communication test",
    domain: "communication",
    type: "MCQ",
    assigneddate: "12 August 2022",
    attempteddate: "10 September 2022",
    id: 5,
  },
  {
    title: "Marketting Scales",
    domain: "Marketting",
    type: "MCQ",
    assigneddate: "12 August 2022",
    compilationdate: "10 june 2022",
    id: 6,
  },
  {
    title: "Behavioural test",
    domain: "attitude",
    type: "MCQ",
    assigneddate: "12 August 2022",
    attempteddate: "05 jan 2022",
    id: 7,
  },
  {
    title: "Numerical test",
    domain: "cognitive",
    type: "MCQ",
    assigneddate: "12 August 2022",
    attempteddate: "20 September 2022",
    id: 8,
  },
  {
    title: "Adaptive Behavior Scales",
    domain: "cognitive",
    type: "MCQ",
    assigneddate: "12 August 2022",
    compilationdate: "15 june 2022",
    id: 9,
  },
  {
    title: "effective communnication test",
    domain: "communication",
    type: "MCQ",
    assigneddate: "12 August 2022",
    attempteddate: "20 August 2022",
    id: 10,
  },
  {
    title: "Numerical Reasoning test",
    domain: "cognitive",
    type: "MCQ",
    assigneddate: "12 August 2022",
    attempteddate: "20 September 2022",
    id: 11,
  },
  {
    title: "Vineland  Scales",
    domain: "cognitive",
    type: "MCQ",
    assigneddate: "12 August 2022",
    compilationdate: "10 june 2022",
    id: 12,
  },
  {
    title: "Numerical Reasoning test",
    domain: "cognitive",
    type: "MCQ",
    assigneddate: "12 August 2022",
    attempteddate: "20 August 2022",
    id: 13,
  },
  {
    title: "Numerical Reasoning test",
    domain: "cognitive",
    type: "MCQ",
    assigneddate: "12 August 2022",
    attempteddate: "20 September 2022",
    id: 14,
  },
  {
    title: "Vineland Adaptive Behavior Scales",
    domain: "cognitive",
    type: "MCQ",
    assigneddate: "12 August 2022",
    compilationdate: "10 june 2022",
    id: 15,
  },
];
