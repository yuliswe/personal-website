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
    date: "June/2021 - July/2022",
    keywords: ["*"],
    bulletPoints: [
      {
        text: "Excellent leadership and product management skills in applying the Scrum/Agile principles to ensure that the developer team stayed on track for the project timeline; ensured that employees were content with the work environment and culture. ",
        keywords: ["projectmanagement", "leadership"],
      },
      {
        text: "Well-communicated with stakeholders to decide on the app's requirements; documented the requirements clearly so that the product's requirements were communicated across the team.",
        keywords: ["communication", "projectmanagement", "leadership"],
      },
      {
        text: "Designed and implemented the APIs; designed a framework that simplified the client-database communication and improved server-side security.",
        keywords: ["systemdesign", "api", "fullstack"],
      },
      {
        text: "Implemented a mobile app with the UI in Flutter and an API server in Python/Django; Worked with the UI designer to create a beautiful and intuitive user interface.",
        keywords: ["mobile", "ios", "django", "flutter", "fullstack"],
      },
    ],
  },
  {
    title: "C++ Database Engineer",
    company: "SAP Canada",
    location: "Waterloo, ON",
    date: "Sept/2019 - May/2021",
    keywords: ["*"],
    bulletPoints: [
      {
        text: "Implemented features of client libraries in C++ for the SAP HANA database; ensured the high performance and error resiliency of the client by implementing proprietary networking protocols and fallback algorithms.",
        keywords: ["c++", "cpp"],
      },
      {
        text: "Created unit and integration tests involving complex infrastructures and database operations; demonstrated the ability to write tests that fully cover the code base.",
        keywords: ["testing", "fullstack"],
      },
      {
        text: "Maintained code that was compatible to different versions of the databases and legacy APIs; demonstrated the ability to understand and maintain complex legacy code.",
        keywords: ["systemdesign", "api", "fullstack"],
      },
      {
        text: "Communicated with the team leader and the stakeholders to provide regular progress reports and feedback; ensured the product satisfied the requirements and was delivered on time.",
        keywords: ["communication", "projectmanagement", "teamwork"],
      },
      {
        text: "Experienced in providing technical support to customers; responsible for reported bugs to the correct person on the team and keeping the customers updated for the progress of resolution.",
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
        text: "Wrote C++ code that implemented a large integer arithmetic computation algorithm, heavily involved memory manipulation and data structures. Displayed proficiency in C++ and data structure algorithm.",
        keywords: ["c++", "cpp", "research"],
      },
      {
        text: "Documented the code and the algorithm in a report that was reviewed by professors. Demonstrated the ability to write technical reports that are clear and concise.",
        keywords: [
          "documentation",
          "reportwriting",
          "communication",
          "research",
        ],
      },
      {
        text: "Regularly reported the progress of the project in a supervisor meeting. Presented ideas to audiences in a clear manner.",
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
        text: "Implemented a ReactJS web application that allowed students to compile and run their homework C code in the browser. Wrote code in HTML, CSS and JavaScript, with the ReactJS framework.",
        keywords: ["javascript", "reactjs", "fullstack", "web", "*"],
      },
      {
        text: "Utilized WebSockets to allow the web application to communicate with the server in real-time.",
        keywords: ["javascript", "reactjs", "fullstack", "web"],
      },
      {
        text: "Implemnted a RESTful API in Common Lisp that allowed the web application to communicate with the server. Demonstrated proficiency in functional programming language.",
        keywords: ["lisp", "fullstack", "web", "api", "fpl"],
      },
    ],
  },
  {
    title: "Instructional Support Assistant",
    company: "University of Waterloo",
    location: "ON",
    date: "Sept/2014 - May/2017",
    keywords: ["assistantship", "teaching"],
    bulletPoints: [
      {
        text: "Worked with students daily to help them understand the course material and improve their programming skills. Demonstrated the ability to communicate technical concepts to non-technical audiences.",
        keywords: ["communication", "teaching"],
      },
      {
        text: "Led the weekly meetings with Teaching Assistants to discuss the course material and the student's progress. Demonstrated leadership skills in leading the team of Teaching Assistants.",
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
        text: "Developed the company's internal platform system for employees to communicate with their supervisors. Wrote code in HTML, CSS and JavaScript, with the AngularJS framework.",
        keywords: [
          "javascript",
          "angularjs",
          "fullstack",
          "fullstack",
          "web",
          "*",
        ],
      },
      {
        text: "Demonstrated teamwork skills in regular reports to the project leader and working with the team of developers to ensure a fast and satisfactory delivery of the software product.",
        keywords: ["communication"],
      },
    ],
  },
];

export default employment;
