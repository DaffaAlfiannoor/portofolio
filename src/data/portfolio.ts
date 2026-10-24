import {
  Code2,
  Database,
  BarChart3,
  Brain,
  Cpu,
  Sigma,
  Globe,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type Skill = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href?: string;
  comingSoon?: boolean;
};

export type Certificate = {
  name: string;
  url: string;
};

export type Experience = {
  period: string;
  title: string;
  organization: string;
  description?: string;
  certificates?: Certificate[];
};

export type ContactInfo = {
  label: string;
  value: string;
  href: string;
  iconName: "mail" | "linkedin" | "github";
};

export type ModuleCertificate = {
  name: string;
  issuer: string;
  pdfUrl: string;
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#work" },
  { label: "Certificate", href: "#certificates" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroData = {
  name: ["Hi, I'm Muhammad Daffa", "Alfiannoor."],
  role: "Data Science and Machine Learning",
  description:
    "Transforming complex data into actionable insights. Leveraging statistical rigor and machine learning to build intelligent systems that solve real-world problems.",
  cta: { label: "View My Project", href: "#work" },
};

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "I am a Data Scientist and Machine Learning Engineer dedicated to building end-to-end systems that transform raw data into actionable intelligence. My focus is on developing models that are not only high-performing but also reliable, interpretable, and ready for real-world deployment.",
    "With experience spanning health risk prediction to NLP-based analysis, I bridge the gap between complex predictive modeling and usable software. I specialize in the full lifecycle of ML development, ensuring every solution is grounded in statistical rigor and engineered for practical impact.",
  ],
};

export const skillsData: Skill[] = [
  {
    icon: Code2,
    title: "Python & SQL",
    description: "Primary languages for data analysis, ML pipelines, and querying large-scale datasets.",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Scikit-learn, XGBoost, TensorFlow/Keras, RandomizedSearchCV, and StratifiedKFold.",
  },
  {
    icon: Brain,
    title: "Generative AI & NLP",
    description: "RAG, LangChain, ChromaDB, Hugging Face, IndoBERT, and Sastrawi.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    description: "Pandas, NumPy, Matplotlib, Seaborn, RFM Segmentation, K-Means, CLV, and PowerBI.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "FastAPI, React, Vite, and Tailwind CSS for building full-stack ML applications.",
  },
  {
    icon: Database,
    title: "Statistics",
    description: "Hypothesis testing, chi-square, and statistical foundations of data science.",
  },
  {
    icon: Wrench,
    title: "Tools",
    description: "Git, Docker, SQLite, and PostgreSQL for versioning, containerization, and storage.",
  },
  {
    icon: Sigma,
    title: "EDA & Feature Engineering",
    description: "Data wrangling, exploratory analysis, and feature engineering for ML pipelines.",
  },
];

export const projectsData = {
  title: "Project",
  subtitle:
    "A showcase of recent projects blending robust engineering with refined design.",
  projects: [
    {
      title: "VitaCheck",
      description:
        "Lack of accessible, initial health screening tools for remote patients.",
      image: "/images/project-vitacheck.png",
      tags: [
        "React",
        "Tailwind",
        "Matplotlib & Seaborn",
        "Logistic Regression",
        "SVM",
        "Random Forest",
        "XGBoost",
        "FastAPI",
        "JWT",
        "SQLite",
        "Recharts",
      ],
      href: "https://github.com/DaffaAlfiannoor/VitaCheck",
    },
    {
      title: "RumahKarir",
      description:
        "Identifying Competency Gaps and Personalizing Career Development Plans.",
      image: "/images/project-ds-capstone.jpg",
      tags: [
        "Python",
        "React",
        "NLP",
        "IndoBERT",
        "Sastrawi",
        "SKKNI/SFIA",
        "Pandas & NumPy",
        "Matplotlib & Seaborn",
      ],
      href: "https://github.com/DaffaAlfiannoor/DS-Capstone",
    },
    {
      title: "RAG Regulasi QA",
      description:
        "A Retrieval-Augmented Generation (RAG) system for Q&A over Indonesian regulatory documents. Uses LangChain, ChromaDB, and OpenAI-compatible LLMs to enable semantic search and context-aware answers from legal/regulatory texts.",
      image: "/images/project-rag-regulasi.png",
      tags: [
        "Python",
        "RAG",
        "LangChain",
        "ChromaDB",
        "Hugging Face",
        "LLM",
        "FastAPI",
      ],
      href: "https://github.com/DaffaAlfiannoor/rag-regulasi-qa",
    },
    {
      title: "Netflix Catalog Analysis",
      description:
        "Exploratory data analysis of the Netflix catalog to uncover content trends, genre distributions, and release patterns over time using Python data analysis tools.",
      image: "/images/project-netflix-analysis.png",
      tags: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "EDA",
        "Data Visualization",
      ],
      href: "https://github.com/DaffaAlfiannoor/Netflix-Catalog-Analysis",
    },
    {
      title: "Predictive Lead Scoring Portal for Banking Sales",
      description:
        "Predicts the conversion potential of prospective customers (leads). The system analyzes various customer data and then generates a lead score that indicates the likelihood of a prospective customer becoming a customer.",
      image: "/images/project-lead-scoring.jpg",
      tags: [
        "Classification",
        "Docker",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "MySQL/PostgreSQL",
        "Plotly",
      ],
      href: "#contact",
    },
    {
      title: "E-Commerce Data Analysis",
      description:
        "Conduct e-commerce data analysis and visualization to identify sales trends and customer behavior.",
      image: "/images/project-ecommerce.png",
      tags: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Data Cleaning",
        "Exploratory Data Analysis (EDA)",
        "Data Visualization",
      ],
      href: "https://github.com/DaffaAlfiannoor/E-Commerce-Data-Analysis",
    },
    {
      title: "Sentiment Analysis on the Shopee App",
      description:
        "Automated positive/negative sentiment classification of Shopee app reviews from Google Play Store using NLP and machine learning.",
      image: "/images/project-shopee.png",
      tags: [
        "Matplotlib",
        "Pandas",
        "Seaborn",
        "NumPy",
        "Scikit-learn",
        "Sastrawi",
        "Wordcloud",
        "NLTK",
      ],
      href: "https://github.com/DaffaAlfiannoor/Sentiment-Analysis-on-the-Shopee-App",
    },
    {
      title: "Customer Churn Analysis and Prediction",
      description:
        "End-to-end machine learning pipeline to analyze customer churn behavior and predict at-risk customers, enabling proactive data-driven retention strategies.",
      image: "/images/project-churn.png",
      tags: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Classification",
        "Exploratory Data Analysis (EDA)",
        "Streamlit",
        "Gradient Boosting",
        "RandomizedSearchCV",
      ],
      href: "https://github.com/DaffaAlfiannoor/Customer-Churn-Analysis-and-Prediction",
    },
    {
      title: "Online Retail Analysis - RFM Segmentation & Customer Lifetime Value",
      description:
        "Comprehensive sales and customer behavior analysis using RFM segmentation and trend analysis to uncover actionable business insights and identify high-value customer segments.",
      image: "/images/project-sales.png",
      tags: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "RFM Analysis",
        "K-Means Clustering",
        "CLV Analysis",
        "Exploratory Data Analysis (EDA)",
        "Data Visualization",
      ],
      href: "https://github.com/DaffaAlfiannoor/sales_customer_analysis",
    },
    {
      title: "Credit Card Fraud Detection",
      description:
        "End-to-end machine learning pipeline to detect fraudulent credit card transactions on a highly imbalanced dataset. Applied SMOTE for class balancing, engineered features, and benchmarked five ensemble classifiers — CatBoost, Random Forest, XGBoost, AdaBoost, and LightGBM — using threshold optimization to maximize PR-AUC and ROC-AUC, achieving the best F1-score of 0.843 with CatBoost.",
      image: "/images/project-fraud-detection.png",
      tags: [
        "Python",
        "Scikit-learn",
        "CatBoost",
        "XGBoost",
        "LightGBM",
        "SMOTE",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Classification",
        "Imbalanced Learning",
      ],
      href: "https://github.com/DaffaAlfiannoor/Credit-Card-Fraud-Detection",
    },
  ],
};

export const certificatesData = {
  title: "Certificate",
  subtitle:
    "Professional certifications earned through intensive learning programs at Dicoding Academy.",
  certificates: [
    {
      name: "Belajar Dasar AI",
      issuer: "Dicoding",
      pdfUrl: "/certificates/modul/Belajar%20Dasar%20AI.pdf",
    },
    {
      name: "Belajar Dasar Data Science",
      issuer: "Dicoding",
      pdfUrl: "/certificates/modul/Belajar%20Dasar%20Data%20Science.pdf",
    },
    {
      name: "Belajar Dasar Git dengan GitHub",
      issuer: "Dicoding",
      pdfUrl: "/certificates/modul/Belajar%20Dasar%20Git%20dengan%20GitHub.pdf",
    },
    {
      name: "Belajar Dasar Structured Query Language (SQL)",
      issuer: "Dicoding",
      pdfUrl: "/certificates/modul/Belajar%20Dasar%20Structured%20Query%20Language%20(SQL).pdf",
    },
    {
      name: "Belajar Dasar Visualisasi Data",
      issuer: "Dicoding",
      pdfUrl: "/certificates/modul/Belajar%20Dasar%20Visualisasi%20Data.pdf",
    },
    {
      name: "Memulai Pemrograman dengan Python",
      issuer: "Dicoding",
      pdfUrl: "/certificates/modul/Memulai%20Pemrograman%20dengan%20Python.pdf",
    },
    {
      name: "Belajar Analisis Data untuk Pemula",
      issuer: "Dicoding",
      pdfUrl: "/certificates/modul/Belajar%20Analisis%20Data%20untuk%20Pemula.pdf",
    },
    {
      name: "Belajar Matematika untuk Data Science",
      issuer: "Dicoding",
      pdfUrl: "/certificates/modul/Belajar%20Matematika%20untuk%20Data%20Science.pdf",
    },
    {
      name: "Belajar Fundamental Pemrosesan Data",
      issuer: "Dicoding",
      pdfUrl: "/certificates/modul/Belajar%20Fundamental%20Pemrosesan%20Data.pdf",
    },
    {
      name: "Belajar Fundamental Analisis Data",
      issuer: "Dicoding",
      pdfUrl: "/certificates/modul/Belajar%20Fundamental%20Analisis%20Data.pdf",
    },
    {
      name: "Belajar Penggunaan Generative AI",
      issuer: "Dicoding",
      pdfUrl: "/certificates/modul/Belajar%20Penggunaan%20Generative%20AI.pdf",
    },
    {
      name: "Belajar Machine Learning untuk Pemula",
      issuer: "Dicoding",
      pdfUrl: "/certificates/modul/Belajar%20Machine%20Learning%20untuk%20Pemula.pdf",
    },
    {
      name: "Belajar Fundamental Deep Learning",
      issuer: "Dicoding",
      pdfUrl: "/certificates/modul/Belajar%20Fundamental%20Deep%20Learning.pdf",
    },
    {
      name: "Membangun Sistem Machine Learning",
      issuer: "Dicoding",
      pdfUrl: "/certificates/modul/Membangun%20Sistem%20Machine%20Learning.pdf",
    },
  ] as ModuleCertificate[],
};

export const journeyData = {
  title: "Journey",
  subtitle: "My professional experience and educational background.",
  education: {
    period: "2023 - PRESENT",
    title: "S1 Informatics Engineering",
    organization: "Gunadarma University",
  },
  experience: [
    {
      period: "SEP 25 - JAN 26",
      title: "Machine Learning Cohort",
      organization: "ASAH led by Dicoding",
      description:
        "Participated in a specialized program designed to develop core competencies in modern Machine Learning, with a strong focus on applying algorithms to real-world datasets. The curriculum demanded a rigorous engineering mindset, moving beyond theory to execute the full lifecycle of machine learning projects from data preparation to final model deployment.",
      certificates: [
        {
          name: "ASAH Machine Learning Cohort Certificate",
          url: "/certificates/asah-2025-certificate.pdf",
        },
      ],
    },
    {
      period: "JAN 26 - JUL 26",
      title: "Data Scientist Cohort",
      organization: "Coding Camp powered by DBS Foundation",
      description:
        "Gained hands-on experience in data preprocessing, exploratory data analysis, feature engineering, model building, model evaluation, and data visualization using Python and related data science libraries. Also served as the team leader for the capstone project, coordinating team members, managing project timelines, and ensuring the successful delivery of the final data science solution.",
      certificates: [
        {
          name: "Coding Camp powered by DBS Foundation Certificate",
          url: "/certificates/coding-camp-2026-certificate.pdf",
        },
      ],
    },
  ],
};

export const contactData = {
  title: "Let's Connect",
  subtitle:
    "I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
};

export const contactInfo: ContactInfo[] = [
  {
    label: "Email",
    value: "muhammadd656@gmail.com",
    href: "mailto:muhammadd656@gmail.com",
    iconName: "mail",
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/muhammad-daffa-alfiannoor",
    href: "https://www.linkedin.com/in/muhammad-daffa-alfiannoor",
    iconName: "linkedin",
  },
  {
    label: "GitHub",
    value: "https://github.com/DaffaAlfiannoor",
    href: "https://github.com/DaffaAlfiannoor",
    iconName: "github",
  },
];

export const footerData = {
  copyright: "© 2026 Muhammad Daffa Alfiannoor.",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-daffa-alfiannoor",
    },
    { label: "GitHub", href: "https://github.com/DaffaAlfiannoor" },
  ],
};
