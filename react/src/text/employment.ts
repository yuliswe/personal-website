type Employment = {
  title: string;
  company: string;
  location: string;
  date: string;
  keywords: string[];
  bulletPoints: {
    text: string;
    keywords: string[];
  }[];
};
export const employment: Employment[] = [
  {
    title: "Technical Director",
    company: "KaleidoDeal Inc.",
    location: "Waterloo, ON",
    date: "Sept/2021 - Dec/2022",
    keywords: ["*"],
    bulletPoints: [
      {
        text: "Excellent leadership and product management skills applying the Scrum/Agile principles.",
        keywords: ["projectmanagement", "leadership"],
      },
      {
        text: "Worked with stakeholders to decide the app's requirements and communicated them across the team.",
        keywords: ["communication", "projectmanagement", "leadership"],
      },
      {
        text: "Led the design and implementation of APIs in Python/Django.",
        keywords: ["systemdesign", "api", "fullstack"],
      },
      {
        text: "Led the UX design to create an intuitive mobile app implemented in Flutter.",
        keywords: ["mobile", "ios", "django", "flutter", "fullstack"],
      },
    ],
  },
  {
    title: "C++ Database Engineer",
    company: "SAP Canada",
    location: "Waterloo, ON",
    date: "Sept/2019 - Sept/2021",
    keywords: ["*"],
    bulletPoints: [
      {
        text: "Developed high performance and error-resilient client libraries of SAP HANA database in C++.",
        keywords: ["c++", "cpp"],
      },
      {
        text: "Implemented proprietary TCP protocols in C++.",
        keywords: ["c++", "cpp", "networking"],
      },
      {
        text: "Unit, end-to-end and continuous integration testing for complex infrastructures and database operations.",
        keywords: ["testing", "fullstack"],
      },
      {
        text: "Maintained compatibility for legacy code and various API versions.",
        keywords: ["systemdesign", "api", "fullstack"],
      },
      {
        text: "Provided technical support to customers by phone call and on forums.",
        keywords: [
          "communication",
          "projectmanagement",
          "leadership",
          "customersupport",
        ],
      },
    ],
  },
  {
    title: "C++ Research Assistant",
    company: "University of Waterloo",
    location: "ON",
    date: "Sept/2015 - May/2018",
    keywords: ["assistantship", "research"],
    bulletPoints: [
      {
        text: "Developed large integer arithmetic computation algorithms in C++ using complex data structures.",
        keywords: ["c++", "cpp", "research"],
      },
      {
        text: "Wrote technical white paper that was clear and concise.",
        keywords: [
          "documentation",
          "reportwriting",
          "communication",
          "research",
        ],
      },
      {
        text: "Presented the progress of the research in regular meetings.",
        keywords: ["communication", "presentation", "leadership", "research"],
      },
    ],
  },
  {
    title: "Fullstack Engineer",
    company: "University of Waterloo",
    location: "ON",
    date: "Jan/2015 - May/2017",
    keywords: ["*"],
    bulletPoints: [
      {
        text: "Developed an online integrated C code development environment in ReactJS.",
        keywords: ["javascript", "reactjs", "fullstack", "web", "*"],
      },
      {
        text: "Utilized WebSockets to allow the client-server in real-time.",
        keywords: ["fullstack", "networking"],
      },
      {
        text: "Implemented APIs in Common Lisp, a functional programming language.",
        keywords: ["lisp", "fullstack", "web", "api", "fpl"],
      },
    ],
  },
  {
    title: "Instructional Support",
    company: "University of Waterloo",
    location: "ON",
    date: "Sept/2014 - May/2017",
    keywords: ["assistantship", "teaching"],
    bulletPoints: [
      {
        text: "Taught students how to program in C. Demonstrated the ability to communicate technical concepts to non-technical audiences.",
        keywords: ["communication", "teaching"],
      },
      {
        text: "Led a group of teaching assistants to supervise exams and mark assignments.",
        keywords: ["leadership", "teamwork", "teaching"],
      },
      {
        text: "Meet with professors daily to design assignments and improve the course content. ",
        keywords: ["leadership", "teamwork", "teaching"],
      },
    ],
  },
  {
    title: "AngularJS Developer",
    company: "Everz Microsystem",
    location: "Burlington, ON",
    date: "Jan/2014 - May/2014",
    keywords: ["*"],
    bulletPoints: [
      {
        text: "Developed an infrastructure platform in AngularJS, HTML and SCSS.",
        keywords: ["javascript", "angularjs", "fullstack", "web", "*"],
      },
      {
        text: "Implemented REST APIs in PHP Laravel.",
        keywords: ["fullstack", "backend", "api"],
      },
    ],
  },
];

export default employment;
