/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mansi Negi",
  title: "Hi, I'm Mansi",
  subTitle: emoji(
    "Master's student at Northeastern University specializing in Project Management and Software Development. Skilled in user-centered project management, stakeholder communication, and risk management, with proficiency in Java and SQL. I’m passionate about leveraging my PM skills to create impactful, user-driven solutions."
  ),
  resumeLink:
    " ", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mansi142000",
  linkedin: "https://www.linkedin.com/in/mansi-negi-700463188/",
  gmail: "negi.ma@northeastern.edu",
  display: true 
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Teaching Assistant",
      company: "Northeastern University",
      companylogo: require("./assets/images/neulogoWhite.png"),
      date: "Jan 2025 – Present",
      desc: "Teaching Assistant for Human-Computer Interaction: Facilitated workshops on competitive analysis, heuristic evaluations, accessibility standards, and user research, while guiding students in implementing design systems for user-centered projects.",
      descBullets: [
      "Facilitated Competitive Analysis Workshops: Guided students in conducting competitive analyses of existing websites, emphasizing the best practices to inform user experience improvements.",
      "Conducted Heuristic Evaluations: Led sessions where students performed heuristic evaluations on various digital platforms, teaching them to identify usability issues and recommend enhancements based on usability principles.",
      "Developed Accessibility Training Modules: Created and delivered instructional content focused on web accessibility standards, ensuring students understood and applied principles to design inclusive user interfaces.",
      "Supervised User Research Projects: Oversaw student-led user research initiatives, including the development of personas, user journey maps, and the synthesis of findings to drive user-centered design decisions.",
      "Collaborated on Design System Implementation: Assisted in the development and teaching of design system concepts, guiding students in creating consistent and scalable design components for use in various projects."
      ]
    },
    {
      role: "IT Project Manager",
      company: "Clean Harbors",
      companylogo: require("./assets/images/Clh.jpg"),
      date: "Aug 2024 – Jan 2025",
      desc: "IT Project Manager Intern at Clean Harbors: Spearheaded release strategies, cross-functional collaboration, and Power BI dashboard development, identifying $1.2M in cost savings, and driving data-driven decision-making through KPI analysis and stakeholder communication.",
      descBullets: [
      "Developed and executed a release strategy for key internal projects, managing enablement data and KPI reporting across business segments to provide actionable insights that supported organizational goals.",
      "Coordinated cross-functional collaboration for critical initiatives by scheduling workshops, facilitating stakeholder communications, and conducting evaluations, achieving a 95% adherence to project timelines.",
      "Designed and delivered Power BI dashboards to visualize project metrics, enhancing data analysis capabilities and promoting alignment among technical program managers, researchers, and organizational leaders.",
      "Crafted stakeholder-focused communications to ensure clear understanding of project objectives, goals, and updates.",
      "Conducted financial and operational analysis, including budgets and forecasts, identifying $1.2M in potential cost savings through optimized resource management processes.",
      "Monitored project milestones and deliverables by analyzing KPIs, delivering insights to guide executive decision-making and maintain alignment with strategic objectives."      ]
    }
  ]
};

const workExperiences1 = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Teaching Assistant",
      company: "Northeastern University",
      companylogo: require("./assets/images/neulogoWhite.png"),
      date: "Jan 2024 – June 2024",
      desc: "Teaching Assistant committed to enhancing student learning by managing extensive weekly office hours, promptly addressing online inquiries, and grading assignments with detailed feedback for a large class.",
      descBullets: [
      "Spearheaded a team of five students through the successful execution of a project, from drafting a comprehensive Statement of Work (SOW) to delivering the final product, utilizing Agile methodologies to enhance collaboration.",
      "Resolved team conflicts effectively and provided crucial support during the project delivery and final presentation stages, ensuring a cohesive team environment and a high-quality project outcome.",
      "Conducted 5-hour weekly office hours and managed Piazza inquiries, ensuring responses within 10 hours to boost student engagement.",
      "Consistently addressed 20 student inquiries each week, enhancing understanding and interaction.",
      "Graded assignments and class activities for 115 students using detailed rubrics to ensure consistency.",
      "Provided constructive feedback on assignments to support and foster student academic development."
      ]
    },
    {
      role: "Quality Specialist",
      company: "Bank of America",
      companylogo: require("./assets/images/bofalogo.png"),
      date: "June 2021 – July 2023",
      desc: "Conducted extensive quality assessments and managed testing processes, significantly enhancing software functionality and reducing defects.",
      descBullets: [
       "Conducted comprehensive quality assessments and executed intricate test cases using agile methodologies, ensuring seamless functionality of software applications; reduced critical defects by 40% and improved user satisfaction by 65%.",
      "Created and managed test plans, test scenarios, and test scripts, guaranteeing thorough testing coverage across multiple software modules.",
      "Facilitated communication between stakeholders, development teams, and product owners to address quality concerns and provide feedback.",
      "Conducted comprehensive integration testing and regression testing to identify software defects and verify bug fixes.",
      "Observed 95% of bugs in the testing environment, reducing chances of anomalies in the production environment.",
      "Automated the process of uploading Use Cases into qTest, resulting in an 85% time savings and a significant reduction in manual workload within Jira."
      ]
    }
  ]
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/neulogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2023 - May 2025",
      desc: "Coursework",
      descBullets: [
        "Human Computer Interaction",
        "Database Management Systems",
        "Programming design paradigm",
        "Natural Language Processing",
        "Cloud Computing",
        "Algorithms"
      ]
    },
    {
      schoolName: "SRM University",
      logo: require("./assets/images/srmlogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Coursework",
      descBullets: [
        "Project Management",
        "Data Structures",
        "Object Oriented Programming",
        "Software Engineering"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const certifications = {
  title: "Certifications and Courses",
  subtitle: "Some certifications and courses I have completed",
  projects: [
    {
      image: require("./assets/images/capm.png"),
      projectName: "Certified Associate in Project Management (CAPM)",
      projectDesc: "PMI",
      footerLink: [
        {
          name: "View",
          url: "https://www.credly.com/badges/ba752c2c-aa4e-46f6-8eea-8448efc54359/linked_in_profile",
        }
      ]
    },
    {
      image: require("./assets/images/google.png"),
      projectName: "Google Project Management",
      projectDesc: "Google",
      footerLink: [
        {
          name: "View",
          url: "https://www.coursera.org/account/accomplishments/specialization/VP1U0O81FSWY",
        }
      ]
    },
    {
      image: require("./assets/images/microsoft.png"),
      projectName: "Career Essentials in Project Management",
      projectDesc: "Microsoft",
      footerLink: [
        {
          name: "View",
          url: require("./assets/pdf/Career Essentials in Project Management by Microsoft and LinkedIn.pdf"),
        }
      ]
    },
    {
      image: require("./assets/images/atlassian.png"),
      projectName: "Atlassian Agile Project Management Professional Certificate",
      projectDesc: "Atlassian",
      footerLink: [
        {
          name: "View",
          url: require("./assets/pdf/Atlassian Agile Project Management Professional Certificate.pdf"),
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some projects I have worked on",
  projects: [
    {
      image: require("./assets/images/eco swift.png"),
      projectName: "Eco Swift",
      projectDesc: "Created a rival business to MBTA as part of 8 hour long Business Intelligence Challenge",
      footerLink: [
        {
          name: "View",
          url: "https://eco-swift-rouge.vercel.app/",
        }
      ]
    },
    {
      image: require("./assets/images/academia.png"),
      projectName: "Academia",
      projectDesc: "The project involved creating a prototype for a comprehensive academic collaboration platform.",
      footerLink: [
        {
          name: "View",
          url: "https://academia-site-nine.vercel.app/",
        }
      ]
    },
    {
      image: require("./assets/images/doordash.png"),
      projectName: "Redesign Project: Doordash",
      projectDesc: "Redesigned the restaurant menu page for DoorDash, enhancing user interface and user experience.",
      footerLink: [
        {
          name: "View",
          url: "https://doordash-redesign.vercel.app/",
        }
      ]
    },
    {
      image: require("./assets/images/uicritique.webp"),
      projectName: "Design Critique",
      projectDesc: " A detailed analysis focusing on usability, accessibility, and visual design, offering improvements to enhance user engagement and satisfaction.",
      footerLink: [
        {
          name: "Project Report",
          url: require("./assets/pdf/report.pdf"),
        }
      ]
    },
    {
      image: require("./assets/images/curesAct.webp"),
      projectName: "Cures Act: A Case Study",
      projectDesc: " A detailed analysis focusing on usability, accessibility, and visual design, offering improvements to enhance user engagement and satisfaction.",
      footerLink: [
        {
          name: "Report",
          url: require("./assets/pdf/Cures Act Report.pdf"),
        },
        {
          name: "Presentation",
          url: require("./assets/pdf/Presentation.pdf"),
        }
      ]
    },
    // {
    //   image: require("./assets/images/medical.webp"),
    //   projectName: "Medical Record Management System",
    //   projectDesc: "Developed a Medical Record Management System using Java Swing and MySQL, focusing on efficient data management with enhanced retrieval and UML visualization.",
    //   footerLink: [
    //     {
    //       name: "Code",
    //       url: "https://github.com/Mansi142000/Medical-Record-Management-System"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    // {
    //   image: require("./assets/images/data.webp"),
    //   projectName: "Heart Disease Prediction",
    //   projectDesc: "Data science project analyzed over 900 observations from five datasets using supervised ML algorithms like Linear Regression, SVM, Naïve Bayes, Decision Tree, achieving 88.4% accuracy in predicting heart disease outcomes.",
    //   footerLink: [
    //     {
    //       name: "Code",
    //       url: "https://github.com/Mansi142000/Heart-Disease-Prediction"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    // {
    //   image: require("./assets/images/netflix.webp"),
    //   projectName: "Tableau Dashboard: Movies and TV Shows Analysis",
    //   projectDesc: "Developed an advanced Tableau dashboard for analyzing over 6,000 Netflix titles by ratings, genres, and global distribution to enhance content strategy and viewer engagement through data-driven decisions.",
    //   footerLink: [
    //     {
    //       name: "Code",
    //       url: "https://github.com/Mansi142000/Movies-and-TV-Shows-Analysis"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "My Inbox is open for all.",
  number: "+1 8575447814",
  email_address: "negi.ma@northeastern.edu"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  educationInfo,
  workExperiences,
  workExperiences1,
  certifications,
  openSource,
  bigProjects,
  contactInfo,
  isHireable
};
