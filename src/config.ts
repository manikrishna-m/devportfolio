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
    "Data Scientist in Leeds with 3+ years’ experience delivering production-ready ML, scalable pipelines, and MLOps. Passionate about reliability, measurable impact, and clear communication.",

  skills: [
    "Python","SQL","Statistics","Machine Learning","NLP","A/B Testing","Data Analysis",
    "MLOps","Docker","GitHub Actions","MLflow","Airflow","Spark","Neo4j",
    "PostgreSQL","MySQL","GCP","AWS","Pandas","PyTorch","TensorFlow","scikit-learn",
    "Streamlit","Tableau"
  ],
  projects: [
    {
      name: "Train Fault Prediction (XGBoost + Streamlit)",
      description:
        "Time-series fault prediction (0.73 recall) with a Streamlit UI; packaged and deployed as a PoC on Cloud Run.",
      link: "https://medium.com/@mandepudi.mk", // replace with blog/case study if available
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
        "Introduced standardized DS project template and pre-commit hooks.",
        "Built reusable PDF→Text package used in 3 projects."
      ]
    },
    {
      company: "Amygda AI, UK",
      title: "Data Scientist",
      dateRange: "Nov 2023 – Mar 2025",
      bullets: [
        "Designed & shipped 4 production ML models for baggage scanners & trains; cut unplanned downtime by ~20%.",
        "Built Python/PostgreSQL ETL + prediction pipelines; 60% runtime reduction.",
        "Processed 14k+ files with PySpark on Dataproc; 40% faster time-to-insight.",
        "MLOps with MLflow, Docker, GitHub, GCP (99.5% reliability via CI/CD + tests).",
        "Improved prediction recall by 15% from production feedback loops."
      ]
    },
    {
      company: "Infosys, India",
      title: "Data Scientist",
      dateRange: "Nov 2020 – Aug 2022",
      bullets: [
        "Healthcare analytics; SQL views + Tableau dashboards (+70% comprehension).",
        "Ensemble model (80% accuracy); NLP duplicate-loan BERT (F1 0.85)."
      ]
    }
  ],
  education: [
    {
      school: "University of Leeds",
      degree: "MSc, Data Science",
      dateRange: "Sep 2022 – Sep 2023",
      achievements: [
        "Graduated with Merit",
      ],
    },
    {
      school: "GVP College of Engineering",
      degree: "B.Tech, Computer Science",
      dateRange: "Aug 2016 – Sep 2020",
      achievements: [
        "Graduated with 8.16/10",
      ],
    },
  ],
};
