export const personalInfo = {
  name: "Aadhi Sivakumar",
  title: "Software Engineer & Machine Learning Researcher",
  location: "Leander, TX",
  phone: "503-260-8864",
  email: "aadhi.sivakumar05@gmail.com", // Updated email with the "i"
  linkedin: "linkedin.com/in/aadhi-sivakumar",
  github: "github.com/aadhi-sivakumar",
  about:
    "I am a student at The University of Texas at Dallas pursuing a Bachelor's degree in Computer Science. My focus extends to working with APIs, leveraging cloud services, backend development, and exploring the potential of machine learning to drive innovation. I am always excited to learn new skills and grow my potential as a software engineer.",
}

export const education = [
  {
    institution: "The University of Texas at Dallas",
    location: "Richardson, TX",
    date: "Aug. 2023 - May 2026", // Added period after Aug
    degree: "Bachelor of Science in Computer Science",
    coursework: [
      "Advanced Data Structures and Algorithms",
      "Computer Architecture",
      "Software Engineering",
      "Discrete Mathematics",
      "Probability and Statistics",
      "Programming in Unix and Other Environments",
    ],
  },
]

export const experience = [
  {
    title: "Incoming Software Engineering Intern",
    company: "Google",
    location: "Dallas, TX",
    date: "Summer 2025",
    details: ["Incoming Software Engineering Intern at Google"],
  },
  {
    title: "Incoming Software Engineering Intern",
    company: "CDK Global",
    location: "Austin, TX",
    date: "Summer 2025",
    details: ["Incoming Software Engineering Intern at CDK Global"],
  },
  {
    title: "Undergraduate Machine Learning Researcher",
    company: "The University of Texas at Dallas",
    location: "Richardson, TX",
    date: "Feb. 2024 – Present",
    details: [
      "Identified anomalies in network traffic, detecting threats like SYN flood and DDoS attacks, by training machine learning models such as Random Forest, Elliptic Envelope, and regression techniques.",
      "Reduced false positive rates by 30% and achieved a precision of 92% and recall of 88% by implementing one-class classifiers with unsupervised machine learning techniques in Python.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Crown Castle",
    location: "Cedar Park, TX",
    date: "Jan. 2025 – Jan. 2025",
    details: [
      "Automated the filtration of FAA tower data from 200,000 rows to 42, saving over 80% of the time compared to manual processes by developing a Python script utilizing Pandas, Tkinter, and Openpyxl. Integrated the script into an existing FME.",
      "Created a Python script using Pandas and Tkinter to compare the filtered FAA tower data to churn data. Graphed the churn trends of each tenant using Matplotlib.",
    ],
  },
  {
    title: "Enterprise Information Technology Intern",
    company: "CDK Global",
    location: "Austin, TX",
    date: "June 2024 – Dec. 2024",
    details: [
      "Streamlined the onboarding process and reduced ticket resolution time by 30% by automating access rights configuration in Active Directory.",
      "Improved operational efficiency by 80% and reduced system issues by 20% by developing automation for the PC Replacement/Retrieval ticketing process using PowerShell and the UPS Shipping API.",
    ],
  },
  {
    title: "Software Engineer",
    company: "HealthEquityPlus",
    location: "Remote",
    date: "Oct. 2021 – June 2023",
    details: [
      "Created a full-stack web application that achieved 10,000+ views and managed 30+ blog posts by using AngularJS, Client-side JS, Python, and APIs including Google Drive, Google Maps, and Gmail.<br><br><a href='https://healthequityplus.net/' target='_blank' rel='noopener noreferrer' class='text-theme-primary hover:underline'>healthequityplus.net</a>",
    ],
  },
]

export const projects = [
  {
    title: "EcoTrack",
    technologies: "React, Node.js, Express.js, OPEN AI API",
    date: "Nov. 2024 – Dec. 2024",
    details: [
      "Developed an online monitoring system with a team of 4 to help companies reduce energy consumption.",
      "Processed energy consumption data from CSV dataset, utilizing Chart.js to create accessible graphs.",
      "Integrated an AI-powered chatbot using OpenAI API to provide instant support and actionable insights.",
      "Implemented goal-setting functionality with dynamic task status updates and designed a leaderboard with a podium display for top performers, promoting competition and motivation.",
    ],
    link: "https://github.com/aadhi-sivakumar/EcoTrack-HACKUTD-2024",
  },
  {
    title: "TrackCam",
    technologies: "Swift, SwiftUI, Xcode",
    date: "June 2024 – Aug. 2024",
    details: [
      "Produced an IOS application for tracking runs, with 'AVFoundation' camera integration and dynamic orientation handling.",
      "Implemented volume button handling through 'MPVolumeView' and 'AVAudioSession' to capture split times efficiently.",
      "Enhanced user experience by automatically saving the video to the Photos app using the 'Photos' framework.",
    ],
    link: "https://github.com/aadhi-sivakumar/TrackCam",
  },
]

export const skills = {
  languages: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS", "Swift", "Bash", "Assembly"],
  frameworks: ["React", "Node.js", "Express.js", "AngularJS", "APIs", "Powershell", "SwiftUI"],
  tools: [
    "Git",
    "Github",
    "Visual Studio Code",
    "IntelliJ Idea",
    "PyCharm",
    "Microsoft Azure",
    "Eclipse",
    "Linux",
    "Tableau",
  ],
  libraries: ["pandas", "NumPy", "scikit-learn", "TensorFlow", "Matplotlib", "PyTorch", "Tkinter", "Openpyxl"],
}
