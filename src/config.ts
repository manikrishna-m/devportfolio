export const siteConfig = {
  name: "Mani Krishna Mandepudi",
  title: "Data Scientist",
  description: "s",
  accentColor: "#1d4ed8",
  social: {
    email: "mandepudi.mk@example.com",
    linkedin: "https://www.linkedin.com/in/manikrishna-m/",
    github: "https://github.com/manikrishna-m",
  },
  aboutMe:
    "Data Scientist with 3+ years’ experience leading machine learning models across transport, healthcare, and financial sectors. Led production-grade ML deployments for airport baggage scanning machines, reducing reactive maintenance costs by 95%, and generating £500k savings. Delivered predictive maintenance and anomaly detection models for UK train fleets, processing billions of sensor data points in real time and reducing engineer workload by 75%.",

  skills : [
    "Regression",
    "Classification",
    "Clustering",
    "Dimensionality Reduction",
    "Neural Networks",
    "Time-Series Modelling",
    "Anomaly Detection",
    "LLMs",
    "RAG Architecture",
    "AI Agents/Agentic AI",
    "MLOps",
    "Apache Spark",
    "PySpark",
    "Apache Airflow",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "GCP",
    "Azure",
    "Python",
    "SQL",
    "NumPy",
    "Pandas",
    "SciPy",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Scikit-learn",
    "PyTorch",
    "LangChain",
    "Docling",
    "Tableau",
    "Streamlit",
    "Git",
    "Pre-commit Hooks",
    "Docker",
    "CI/CD",
    "GitHub Actions",
    "MLflow",
    "Agile",
    "JIRA",
    "Feature scaling",
    "Encoding",
    "Outlier handling",
    "Missing value imputation",
    "Time-series feature extraction",
    "Communication",
    "Problem Solving",
    "Collaboration",
    "Presentation"],

  projects: [
    {
      name: "Train Fault Prediction (XGBoost + Streamlit)",
      description:
        "Time-series fault prediction (0.73 recall) with a Streamlit UI; packaged and deployed as a PoC on Cloud Run.",
      link: "https://medium.com/@mandepudi.mk", 
      skills: ["Python","XGBoost","Time Series","Streamlit","GCP"]
    },
    {
      name: "Knowledge Graph for Docs (GPT-4 + Neo4j)",
      description:
        "Built a KG pipeline to extract entities/relations from unstructured docs and speed up retrieval by ~25%.",
      link: "https://medium.com/@mandepudi.mk",
      skills: ["LLMs","Neo4j","NLP","LangChain"]
    },
    {
      name: "PDF → Text Package",
      description:
        "Reusable package for text/image/hybrid PDFs; used across multiple projects.",
      link: "https://github.com/manikrishna-m", // replace if you open-source it
      skills: ["Python","Tesseract/ocr","Pandas"]
    },
    {
      name: "Malaria Transmission Blocking Drug (PHIDDLI)",
      description:
        "End-to-end ML pipeline on malaria dataset.",
      link: "https://github.com/manikrishna-m/Malaria-Transmission-Blocking-Drug",
      skills: ["Python","scikit-learn"]
    },
    {
      name: "Address Extraction (BERT NER)",
      description: "BERT-based NER to extract addresses from documents.",
      link: "https://github.com/manikrishna-m/address_extraction",
      skills: ["BERT","NLP","PyTorch"]
    }
  ],
  experience: [
    {
      company: "LMS Ltd, UK",
      title: "Data Scientist",
      dateRange: "Jun 2025 – Present",
      bullets: [
        "Developed the Python-based PDFTextConverter (Docling) for OCR and text extraction, processing 25,000 mortgage PDFs monthly across 35 document types with improved accuracy.",
        "Spearheaded creation of a standardised Data Science project template with pre-commit hooks, adopted in 4+ projects by a team of 6, reducing setup time by 3+ hours per project.",
        "Led benchmarking and optimisation of PDFTextConverter on NVIDIA H100 GPUs, achieving 3–5× faster processing and validating gains through Word and Character Error Rate metrics."
      ]
    },
    {
      company: "Amygda AI, UK",
      title: "Data Scientist",
      dateRange: "Nov 2023 – Mar 2025",
      bullets: [
        "Spearheaded production-grade ML deployment for 40+ Heathrow airport baggage scanning machines, predicting HVPS and X-ray tube failures, reducing reactive maintenance costs by 95%, cutting overall spend by 61%, saving £500k, and automating monitoring to save 1,660 staff hours annually; project now being scaled across additional assets.",
        "Delivered predictive maintenance and anomaly detection models across train fleet projects in the UK, achieving 90% detection rate, reducing weekly engineer workload by 75%, and processing billions of sensor data points in real time.",
        "Directed scalable PySpark pipelines on GCP to process 14,000+ annual airport log files, reducing analysis time from 32 to 4 hours and enabling real-time anomaly detection for operational teams.",
        "Orchestrated feature engineering and forecasting models (XGBoost, anomaly detection) for Heathrow airport machines, achieving 0.81 recall and enabling actionable maintenance planning across operations.",
        "Implemented exponential moving average (EMA) anomaly detection and supervised models on high-frequency train sensor data, uncovering 18 of 23 failures and presenting results via a Streamlit application to stakeholders.",
        "Developed an internal Streamlit tool for automated data exploration, cleaning, feature selection, and anomaly detection, adopted by 2+ clients in the UK transport sector and reducing project setup time by 30%.",
        "Constructed a GPT-4/Neo4j knowledge graph from maintenance documents in the UK, improving retrieval efficiency and increasing F1@5 for RAG-based chatbot queries by 25%.",
        "Integrated real-time feedback loops into ML models for Heathrow and train fleets, increasing recall by 15% and stabilising production performance.",
        "Established end-to-end MLOps workflows with MLflow, GitHub Actions, and Docker, automating CI/CD pipelines, achieving 99.5% production reliability, and cutting setup time by 10+ hours for 2 additional projects.",
        "Collaborated with operations teams, maintenance engineers, and AI leadership across UK airports and train fleets to deliver predictive insights, strengthening stakeholder confidence in AI-driven maintenance strategies.",
      ]
    },
    {
      company: "Infosys, India",
      title: "Digital Specialist Engineer",
      dateRange: "Nov 2020 – Aug 2022",
      bullets: [
        "Led cross-functional teams in analysing healthcare data for pregnant women in India, cleaning and creating SQL views that improved data quality and enabled seamless Tableau dashboard integration.",
        "Designed and deployed a Tableau dashboard for pregnancy monitoring, consolidating patient data, reducing analysis time from 2 hours to 10 minutes, and improving data comprehensibility by 70% for clinical staff.",
        "Built and trained an ensemble ML model with 80% accuracy using feature engineering and hyperparameter tuning, enhancing predictive insights for maternal healthcare outcomes.",
        "Developed an NLP proof-of-concept using BERT and PyTorch to detect duplicate loan applications in India, reducing redundancy by 30% with an F1 score of 0.85 and leveraging AWS S3 for scalable data storage.",
        "Contributed to the Income Tax Portal ITR development, resolving UI bugs and designing an error message system that reduced support queries for 6.72 million taxpayers during FY 2022–23.",
        "Implemented UI flows for Rectification Project modules (TDS1, TDS2, TDS3, Tax Credit Mismatch), adding validations and error handling that reduced manual interventions across three financial years.",
        "Deployed 5+ Accreditation Modules for organisational users, building key UI features for internal authorities, improving workflow efficiency by ~25%, and extending portal functionality across departments.",
        "Authored unit test cases for 5 modules, conducted SIT and UAT testing, and supported production deployment for 10+ Income Tax Portal modules, ensuring system reliability and scalability.",
      ]
    }
  ],
  education: [
    {
      school: "University of Leeds",
      degree: "MSc, Data Science",
      dateRange: "Sep 2022 – Sep 2023",
      achievements: [
        "Awarded 2:1 (Merit) classification.",
        "Key modules: Probability and Statistics, Machine Learning, Deep Learning, Case Studies in Data Science.",
        "Fully funded by the Government of Andhra Pradesh for admission to a top 100 global university.",
      ],
    },
    {
      school: "GVP College of Engineering",
      degree: "B.Tech, Computer Science",
      dateRange: "Aug 2016 – Sep 2020",
      achievements: [
        "Graduated with CGPA 8.16/10.",
        "Key modules: Data Structures, C, Java, Python, Database Management Systems, Computer Networks.",
        "Fully funded by the Government of Andhra Pradesh due to excellent rank (EAMCET: 4,445).",
      ],
    },
  ],
};
