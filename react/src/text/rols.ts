export const roles = [
  {
    title: "Web Fullstack",
    keywords: ["fullstack"],
  },
  {
    title: "Python",
    keywords: ["python"],
  },
  {
    title: "Django/Flask",
    keywords: ["django", "flask"],
  },
  {
    title: "JavaScript/NodeJS",
    keywords: ["javascript", "nodejs"],
  },
  {
    title: "Flutter",
    keywords: ["flutter"],
  },
  {
    title: "Swift",
    keywords: ["swift"],
  },
  {
    title: "Mobile Apps",
    keywords: ["mobile", "ios", "android"],
  },
  {
    title: "C++",
    keywords: ["c++"],
  },
  {
    title: "Project Management/Leadership",
    keywords: ["projectmanagement", "leadership"],
  },
  {
    title: "Software Architecture",
    keywords: ["softwarearchitecture"],
  },
  {
    title: "System Design",
    keywords: ["systemdesign"],
  },
  // {
  //   title: "Algorithmic/AI Trading",
  //   keywords: ["algorithmic", "ai", "trading"],
  // },
  {
    title: "Amazon Web Services",
    keywords: ["aws", "cloud", "cloudcomputing"],
  },
  {
    title: "Distributed Systems",
    keywords: ["distributedsystems"],
  },
  {
    title: "Data Science",
    keywords: ["datascience"],
  },
  {
    title: "Networking",
    keywords: ["networking"],
  },
  {
    title: "Communication",
    keywords: ["communication"],
  },
  {
    title: "Teaching",
    keywords: ["teaching", "tutoring"],
  },
  {
    title: "Research",
    keywords: ["research"],
  },
  {
    title: "Select All",
    keywords: ["*"],
  },
];
export const allKeywords = new Set<string>();
for (const role of roles) {
  for (const keyword of role.keywords) {
    allKeywords.add(keyword);
  }
}

export default roles;
