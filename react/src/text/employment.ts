type Employment = {
  title: string;
  company: string;
  location: string;
  date: string;
  keywords: string[];
  highlight: string[];
  bulletPoints: {
    text: string;
    keywords: string[];
  }[];
};
export const employment: Employment[] = [
  {
    title: "Lead Software Engineer",
    company: "KaleidoDeal",
    location: "ON, Remote",
    date: "Since Jun 2021",
    keywords: ["*", "c++"],
    highlight: [
      "Python",
      "TypeScript",
      "Flutter",
      "React",
      "GraphQL",
      "Terraform",
      "AWS",
    ],
    bulletPoints: [
      {
        text: "Developed a Flutter+React app from scratch and optimized user experience, resulting in a product that secured $100,000 in funding for the company.",
        keywords: [
          "*",
          "mobile",
          "ios",
          "django",
          "flutter",
          "fullstack",
          "javascript",
        ],
      },
      {
        text: "Implemented a Python framework that reduced the amount of server code by 50%, resulting in fast development speed and maintainable backend code.",
        keywords: [
          "*",
          "systemdesign",
          "api",
          "fullstack",
          "python",
          "javascript",
        ],
      },
      {
        text: "Led development team delivering software product on time and within budget, aiding the company's success.",
        keywords: ["*", "communication", "projectmanagement", "leadership"],
      },
    ],
  },
  {
    title: "Database Software Engineer",
    company: "SAP Canada",
    location: "Waterloo, ON",
    date: "Sept 2019 - May 2021",
    keywords: ["*", "c++"],
    highlight: ["C++", "SQL", "Testing"],
    bulletPoints: [
      {
        text: "Developed high-performance and error-resilient C++ libraries of SAP HANA database, driving an annual revenue of $25 billion for the corporation.",
        keywords: ["*", "c++", "cpp"],
      },
      {
        text: "Created unit tests, continuous integration and end-to-end testing for database, reducing the team's bug backlog by 50%.",
        keywords: ["*", "testing", "fullstack"],
      },
      {
        text: "Provided technical support to customers with ticket system and phone calls, resulting in customer satisfaction in quarter reviews.",
        keywords: [
          "*",
          "communication",
          "projectmanagement",
          "leadership",
          "customersupport",
        ],
      },
    ],
  },
  {
    title: "Developer (Part-time)",
    company: "University of Waterloo",
    location: "ON",
    date: "2015 - 2019",
    keywords: ["*", "assistantship", "research"],
    highlight: [
      "C++",
      "Lisp",
      "TypeScript",
      "React",
      "Nodejs",
      "CSS",
      "HTML",
      "API Server",
    ],
    bulletPoints: [
      {
        text: "Implemented algorithm with C++ resulting in a 2x speedup of computation, leading to abstracts published in SIGSAM Communications in Computer Algebra.",
        keywords: ["*", "c++", "cpp", "research"],
      },
      {
        text: "Developed a browser-based code editor and compilation tools with React, supporting more than 1000 concurrent sessions and utilized by over 10,000 students during a 4-years period.",
        keywords: ["*", "c++"],
      },
    ],
  },
  {
    title: "Instructional Support",
    company: "University of Waterloo",
    location: "ON",
    date: "2014 - 2017",
    keywords: ["full-employment"],
    highlight: ["Teaching", "Leadership", "Teamwork"],
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
    company: "Evertz Microsystem",
    location: "Burlington, ON",
    date: "2014 - 2015",
    keywords: ["full-employment"],
    highlight: ["TypeScript", "Angular", "CSS", "Rest API"],
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
