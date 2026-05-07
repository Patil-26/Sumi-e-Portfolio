export const personalInfo = {
  name: "Atharva Patil",
  role: "Cybersecurity & Full-Stack Developer",
  tagline: "Crafting intelligence through data, art through code.",
  location: "Mumbai, India",
  email: "atharvappatil2005@gmail.com",
  github: "https://github.com/Patil-26",
  linkedin: "https://www.linkedin.com/in/atharva-patil-046a25338",
  resume: "/resume.pdf",
  bio: [
    "I engineer systems that protect and perform—blending machine learning algorithms, cybersecurity principles, and full-stack web development.",
    "Currently exploring the intersection of network security and AI, I treat every project and API shipped as a step toward building safer, smarter digital environments.",
  ],
};

export const skills = [
  {
    category: "Cybersecurity and Networking",
    items: [
      { name: "Network Traffic Analysis", level: 82 },
      { name: "Intrusion Detection Systems", level: 95 },
      { name: "Firewal & Security Monitoring", level: 78 },
      { name: "Incident Response", level: 85 },
    ],
  },
  {
    category: "Engineering",
    items: [
      { name: "React / Next.js", level: 80 },
      { name: "Node.js / Express", level: 75 },
      { name: "MongoDB / SQL", level: 82 },
      { name: "FastAPI / Flask", level: 78 },
    ],
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "Random Forest / XGBoost", level: 90 },
      { name: "Matplotlib / Folium", level: 85 },
      { name: "Isolation Forest", level: 92 },
      { name: "K-Means Clustering", level: 72 },
    ],
  },
  {
    category: "Core Tools & Architecture",
    items: [
      { name: "Docker & Git", level: 82 },
      { name: "Linux / Bash Scripting", level: 78 },
      { name: "REST APIs", level: 75 },
      { name: "Data Structure & Algorithms", level: 80 },
    ],
  },
];

export const projects = [
  {
    id: "01",
    title: "Multi Model Intrusion Detection System",
    category: "Cybesecurity · Machine Learning · Networking",
    year: "2026",
    description:
      "An intelligent security architecture for real-time network anomaly detection. Built with Python and Scapy for packet sniffing, and integrated with a hybrid Machine Learning pipeline for automated threat classification.",
    tags: ["Python", "Scapy", "Scikit-learn", "Random Forest", "SVM", "Logistic Regression", "Cybersecurity"],
    github: "https://github.com/Patil-26/Hybrid-ML-IDS.git",
    live: null,
    featured: false,
  },
  {
    id: "02",
    title: "Sumi-e Portfolio",
    category: "React · GSAP · Framer Motion",
    year: "2024",
    description:
      "This very portfolio — built with React, GSAP, and Framer Motion. Canvas-ink aesthetics, cinematic scroll animations, and premium micro-interactions.",
    tags: ["React", "GSAP", "Framer Motion", "CSS Modules"],
    github: "https://github.com/Patil-26/Sumi-e-Portfolio.git",
    live: null,
    featured: false,
  },
  {
    id: "03",
    title: "Urban Ride Demand Analysis & Hotspot Detection",
    category: "Data Science · Machine Learning · Geospatial",
    year: "2025",
    description:
      "End-to-end ride demand analysis pipeline using synthetically generated NYC ride data. Applies K-Means Clustering with the Elbow Method for unsupervised hotspot detection and EDA for temporal pattern discovery. Real-time geospatial density visualisation with Folium HeatMap, supported by fare analytics and Day × Hour frequency heatmaps.",
    tags: ["KMeans", "Folium", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Python"],
    github: "https://github.com/Patil-26/Ride-Demand-Analysis.git",
    live: null,
    featured: false,
  },
  {
    id: "04",
    title: "SeatSync — Full Stack Carpooling Platform",
    category: "MERN · REAL-Time · Maps",
    year: "2026",
    description:
      "Carpooling platform with role-based auth, real-time booking via Socket.io, OSM-powered location autocomplete, Haversine route matching, mock UPI/GPay payment flow, trust scoring, SOS emergency alerts, email notifications, and an admin dashboard with fraud detection and driver verification.",
    tags: ["Node.js", "React", "MongoDB", "Socket.io", "Leaflet", "Nodemailer", "Express", "JWT"],
    github: "https://github.com/Patil-26/SeatSync.git",
    live: null,
    featured: false,
  },
];

export const experience = [
  {
    year: "2023 — Present",
    role: "IT Engineering Student",
    company: "Mumbai University",
    description:
      "Pursuing a rigorous IT Engineering curriculum spanning data structures, algorithms, web development, and cybersecurity fundamentals. Built production-grade projects integrating machine learning, geospatial visualization, and full-stack engineering — applying classroom theory to real-world systems.",
    skills: ["Machine Learning", "Python", "DSA", "Cybersecurity", "Data Visualization"],
  },
  {
    year: "2025",
    role: "Network Analyst Intern",
    company: "Camlin CFS",
    description:
      "Assisted in monitoring firewall activity and security alerts as part of the security operations team.",
    skills: ["Firewall Monitoring", "Network Traffic Analysis", "SIEM Tools", "Incident Response"],
  },
];

export const techStack = [
  "Python", "React", "Node.js", "FastAPI", "MongoDB",
  "Seaborn", "Scapy", "Pandas", "GSAP", "Scikit-Learn",
  "Git", "Wireshark", "Folium"
];