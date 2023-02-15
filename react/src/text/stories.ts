export type MyStory = {
  title: string;
  keywords: string[];
  text: string;
};
export const stories: MyStory[] = [
  {
    title: "...Fullstack",
    keywords: ["fullstack"],
    text: `
    My first experience with web development was with PHP and MySQL in 2012, writing native JavaScript with jQuery for the front-end.
    As the web technologies evolved, I moved on to AngularJS and EmberJS and used them during my first paid internship in 2015. 
    When TypeScript gained popularity I quickly picked it up and learned ReactJS and VueJS as they became the industrial standards.
    I have developed backends with Python/Django/Flask, submitted bug fixes to the Django source code, and even developed a REST-API framework for Django in an attempt to simplify the frontend-backend communication and authorization.

    Today, I work with TypeScript, ReactJS, GraphQL (Apollo), and NodeJS daily. I am a fullstack developer who writes and designs the front-end UI as well as the backend API.
    I understand networking, HTTP protocol, Websocket, OAuth, and web security. For deployment, I use AWS API Gateway, Lambda, S3, DynamoDB and CloudFront, which help me deliver a scalable and reliable web application to production quickly.
    `,
  },
  {
    title: "...Python",
    keywords: ["fullstack"],
    text: `
    Python is my go-to language for scripting and prototyping. I have used it to automate my work, build web scrapers, and develop data science tools.
    I have also used Django and Flask for building web applications. I also use numpy, pandas, and scikit-learn for data science and machine learning.
    `,
  },
  {
    title: "...Django/Flask",
    keywords: ["django", "flask"],
    text: `
    I have written and maintained legacy codebases using Django and Flask. I have also contributed to the Django source code by submitting bug fixes and pull requests. 
    Working with Django's ORM was an enjoyable experience, and I have written a REST-API framework for Django to simplify the frontend-backend communication as well as authorization.
  
    `,
  },
  {
    title: "...JavaScript/TypeScript",
    keywords: ["javascript", "typescript"],
    text: `
    TypeScript has become my favorite programming language in the past few years. I have used it to develop web applications, mobile applications, and even desktop applications.
    I am an expert in TypeScript and the tools that come with the JavaScript ecosystem, such as NPM, Webpack, Babel, and ESLint. 
    I work with TypeScript on a daily basis, and I can pick up your codebase and start contributing to it in no time.
    `,
  },
  {
    title: "...Mobile Apps",
    keywords: ["swift", "objective-c", "ios", "mobile", "flutter"],
    text: `
    I have developed mobile apps for iOS and Android using Swift, React Native and Flutter. I mainly design and ship apps for iOS, but I have also developed apps for Android with Flutter.
    When I was a technical director at KaleidoDeal, my team and I wrote a short-video based e-commerce app for iOS and Android using Flutter. 
    The app displays short videos of products and allows users to buy the products by clicking on the video. 
    The development involved a few complex programming tasks, for example, handling asynchronous events such as customer payment and ensuring the consistency of data across a distributed database.
    We solved these problems by implementing an idempotent API.
    Being experienced in developing a mobile app from scratch, I can help you with your mobile app development regardless of the complexity of the requirement.
    `,
  },
  {
    title: "...Flutter",
    keywords: ["flutter", "mobile", "ios", "android"],
    text: `
    When I worked as a technical director at KaleidoDeal, my team and I collectively chose Flutter for developing our iOS app.
    I have no doubt that Flutter is the future of mobile app development, because of the speed of development and efficiency of rendering it provides. In the past, I have used similar technologies such as Qt (for desktop apps) and React Native, but Flutter is by far the best in terms of the rendering time and UI feel.
    I designed the architecture of our app based on the Redux architecture, which nicely separates the code into the UI layer, the business logic layer, and the backend communication layer.
    Having written a few thousand lines of Flutter code, I am confident that I can deliver a high-quality Flutter app for you.
    `,
  },
  {
    title: "...Swift/Objective-C++",
    keywords: ["swift", "objective-c", "ios", "mobile"],
    text: `
    In 2019, I was an independent iOS developer and I wrote a browser app based on WebView with Qt and Objective-C++ as a glue layer. When Swift 5 was released, 
    I migrated the code to Swift. There were a lot of things I liked about Swift, primarily because of the readability and the ease of integration with iOS. 
    If you have an iOS app that needs to be developed, I can help you with that.
    `,
  },
  {
    title: "...C++",
    keywords: ["c++", "cpp", "cplusplus"],
    text: `
    I have used C++ to develop desktop applications with Qt. When I worked as a Database Engineer at SAP Canada, our team was responsible for developing and maintaining the  C++ client library for the SAP HANA database,
    as well as a command-line tool for managing the database. I have also used C++ to develop a few data structures and algorithms for research projects at the university when I worked with a professor as a research assistant.
    I am familiar with memory management, pointer arithmetic, data structures, and algorithms.
    `,
  },
  {
    title: "...Distributed Systems",
    keywords: [
      "distributedsystem",
      "distributedsystems",
      "aws",
      "kubernetes",
      "docker",
      "microservices",
    ],
    text: `
    When I worked as a Database Engineer at SAP Canada, I was responsible for developing and maintaining the C++ client library for the SAP HANA database, 
    which supports distributed replicas. I have also written AWS Lambda functions with SQS message queues to handle asynchronous events such as customer payment.
    I have also used docker swarm and Kubernetes to deploy and manage distributed microservices.
    `,
  },
  {
    title: "...Amazon Web Services",
    keywords: ["aws"],
    text: `
    I use AWS Lambda, API Gateway, SQS, S3, RDS, DynamoDB, and CloudFront for developing microservices-based web applications. 
    I have also used AWS Amplify and AppSync for quickly prototyping apps. I am familiar with the AWS CLI and the AWS SDK for JavaScript, 
    and many popular AWS products.
    `,
  },
  {
    title: "...Product Management",
    keywords: ["projectmanagement"],
    text: `
    As a technical director at KaleidoDeal, I was responsible for managing the development of our short-video based e-commerce app. 
    Our team consisted of 5 developers and 1 UI designer. At the beginning of COVID-19, remote work had become an essential part of our work,
    and everyone was thrown off guard. I had to quickly learn how to manage a remote team and how to communicate with them effectively. Because 
    when you don't have a physical office, you easily become mentally disconnected from your team. And this goes both ways: engineers 
    may feel detached from their work too.
    On the other hand, everyone also enjoyed the freedom of working from home, and it was detrimental that we find a way to stay connected and productive.
    Our team and I worked out a great method: we had a daily 1-to-1 meeting at 9:30 AM. However, instead of discussing the work we did, 
    we discussed the work we were going to do for the day. And on Friday, we had a regular stand-up meeting to discuss the work we did for the week.
    The 1-to-1 meeting was a great way to stay connected with my team, and it helped everyone shift into a proactive mindset instead of a reactive one.
    It was also important that the employees feel incentivized to complete their work. I listen to my team's concerns and try to address them as much as possible.
    I understood why each team member was working for the company: some were purely for financial motives, and some were seeking opportunities to learn and grow,
    and I address them accordingly.
    `,
  },
];
export default stories;
