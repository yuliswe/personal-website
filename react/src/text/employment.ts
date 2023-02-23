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
    date: "2022 - 2023",
    keywords: ["*"],
    bulletPoints: [
      {
        text: "Excellent leadership and product management skills applying the Scrum/Agile principles.",
        keywords: ["projectmanagement", "leadership"],
      },
      {
        text: "Led the design and implementation of REST APIs with Python/Django, GraphQL server with JavaScript/NodeJS, resulting in a scalable and maintainable backend.",
        keywords: ["systemdesign", "api", "fullstack", "python", "javascript"],
      },
      {
        text: "Led the UX design to create an intuitive mobile app implemented in Flutter and ReactJS.",
        keywords: [
          "mobile",
          "ios",
          "django",
          "flutter",
          "fullstack",
          "javascript",
        ],
      },
      {
        text: "Collaborated with stakeholders to design the app's requirements, and effectively communicated them to the rest of the team.",
        keywords: ["communication", "projectmanagement", "leadership"],
      },
    ],
  },
  {
    title: "Database Engineer",
    company: "SAP Canada",
    location: "Waterloo, ON",
    date: "2019 - 2021",
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
        text: "Maintained C++ client library code for compatibility across different versions of APIs.",
        keywords: ["systemdesign", "api", "fullstack"],
      },
      {
        text: "Unit, end-to-end and continuous integration testing for complex infrastructures and database operations.",
        keywords: ["testing", "fullstack"],
      },
      {
        text: "Provided technical support to customers by phone call and on forums, resolving their issues.",
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
    date: "2017 - 2018",
    keywords: ["assistantship", "research"],
    bulletPoints: [
      {
        text: "Developed large integer arithmetic computation algorithms in C++ using complex data structures.",
        keywords: ["c++", "cpp", "research"],
      },
      {
        text: "Wrote a clear and concise technical white paper that explained complex mathematical concepts in an accessible way.",
        keywords: [
          "documentation",
          "reportwriting",
          "communication",
          "research",
        ],
      },
      {
        text: "Presented research progress updates at regular meetings, facilitating productive discussions with team members and leadership and enabling the project to stay on track to meet important deadlines.",
        keywords: ["communication", "presentation", "leadership", "research"],
      },
    ],
  },
  {
    title: "Fullstack Engineer",
    company: "University of Waterloo",
    location: "ON",
    date: "2015 - 2017",
    keywords: ["*"],
    bulletPoints: [
      {
        text: "Developed a fully functional web-based C code integrated development environment using ReactJS, HTML, CSS, and JavaScript.",
        keywords: ["javascript", "reactjs", "fullstack", "web"],
      },
      {
        text: "Implemented real-time client-server communication using WebSockets, enhancing user experience and efficiency.",
        keywords: ["fullstack", "networking"],
      },
      {
        text: "Built APIs using Common Lisp, a functional programming language, to facilitate seamless data transfer and support system scalability.",
        keywords: ["lisp", "fullstack", "web", "api", "fpl"],
      },
    ],
  },
  {
    title: "Instructional Support",
    company: "University of Waterloo",
    location: "ON",
    date: "2014 - 2017",
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
    title: "Web Developer",
    company: "Everz Microsystem",
    location: "Burlington, ON",
    date: "2014 - 2015",
    keywords: ["*"],
    bulletPoints: [
      {
        text: "Designed and developed a web-based infrastructure platform using AngularJS, HTML, and CSS.",
        keywords: ["javascript", "angularjs", "fullstack", "web", "*"],
      },
      {
        text: "Implemented RESTful APIs using PHP Laravel framework for efficient data communication.",
        keywords: ["fullstack", "backend", "api"],
      },
      {
        text: "Contributed to the testing and debugging process to ensure high-quality code delivery.",
        keywords: ["testing"],
      },
    ],
  },
];

export default employment;
