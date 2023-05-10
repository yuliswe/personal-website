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
    title: "Software Engineer",
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
        text: "Developed a mobile application from inception to completion, resulting in a product that secured $100,000 in funding for the company.",
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
        text: "Designed and implemented API servers, incorporating a payment system and a streaming system, resulting in a scalable and maintainable backend.",
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
        text: "Effectively led development team delivering software product over 6 months on time and on budget.",
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
    highlight: ["C++", "Network Protocol", "Python", "Docker"],
    bulletPoints: [
      {
        text: "Developed high-performance and error-resilient libraries of SAP HANA database, driving an annual revenue of $25 billion.",
        keywords: ["*", "c++", "cpp"],
      },
      {
        text: "Software unit testing, continuous integration, end-to-end testing with complex infrastructures, improving software reliability.",
        keywords: ["*", "testing", "fullstack"],
      },
      {
        text: "Provided technical support to customers by phone calls and on forums, resulting in customer satisfaction.",
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
    title: "Research Developer (Part-time)",
    company: "University of Waterloo",
    location: "ON",
    date: "2015 - 2019",
    keywords: ["*", "assistantship", "research"],
    highlight: ["C++", "Lisp", "TypeScript", "React", "Nodejs"],
    bulletPoints: [
      {
        text: "Implemented algorithm with C++ resulting in a 2x speedup of computation, leading to abstracts published in SIGSAM Communications in Computer Algebra.",
        keywords: ["*", "c++", "cpp", "research"],
      },
      {
        text: "Developed a browser-based code editor and compilation tools, supporting up to 1000 concurrent sessions and utilized by over 10,000 students during a 4-years period.",
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
