<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=30&duration=2800&pause=900&color=6C63FF&center=true&vCenter=true&multiline=false&repeat=true&width=900&lines=Hi+%F0%9F%91%8B%2C+I'm+Durgam+Poojitha;Full+Stack+Engineer+%7C+AI+%26+ML+Developer;Data+%26+Business+Intelligence+Enthusiast)](https://git.io/typing-svg)

<br/>

**`Architecting Intelligent Systems · Medical AI · NLP · Full Stack Platforms · Data Intelligence`**

<br/>

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-woad-mu-53.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/poojitha-durgam-856a0b291)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/DurgamPoojitha/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:durgampoojitha19@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DurgamPoojitha)

<br/>

![Profile Views](https://komarev.com/ghpvc/?username=DurgamPoojitha&color=6C63FF&style=for-the-badge&label=PROFILE+VIEWS)

</div>

---

## ⚡ Who I Am

```python
class Poojitha:
    name        = "Durgam Poojitha"
    education   = "B.Tech CSE · Amrita School of Engineering · 2023–2027 · GPA: 8.13/10"
    roles       = ["Full Stack Engineer", "AI & ML Developer", "Data & Business Enthusiast"]
    interning   = [
        "WeKan Enterprise Solutions — Medical AI (SAM · Deep Learning) · Feb 2026–Present",
        "MindYatra.in — Mobile Full Stack (React Native + Laravel) · May 2026–Jun 2026",
        "Innovatiq Technologies — Full Stack LMS · May 2025–Jun 2025",
    ]
    building    = ["Mental Wellness App", "Nucleus Segmentation Pipelines", "NLP Security Systems"]
    open_to     = ["AI/ML Internships", "SWE Roles", "Mobile Engineering", "Research Positions"]
```

Engineering end-to-end systems at the intersection of AI, full-stack development, and data intelligence. From designing fine-tuned transformer models that hit **F1 scores of 0.9967** to building cross-platform mobile applications for mental wellness — focused on delivering measurable engineering impact across web, mobile, and AI.

Currently holding an **active internship** at **WeKan Enterprise Solutions**, developing medical imaging AI pipelines with SAM. Previously interned at **MindYatra.in**, where I built a mental wellness companion app with React Native + Laravel.

---

## 🚀 Featured Projects

---

### 🧠 Enterprise Workforce Intelligence & Attrition Risk Platform

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![MLflow](https://img.shields.io/badge/MLflow-0194E2?style=flat-square&logo=mlflow&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![XGBoost](https://img.shields.io/badge/XGBoost-FF6600?style=flat-square&logo=xgboost&logoColor=white)
![HR Analytics](https://img.shields.io/badge/HR_Analytics-6C63FF?style=flat-square&logoColor=white)

Enterprise-grade HR analytics platform with a Streamlit interactive dashboard, FastAPI inference engine, MLflow model registry, and Docker orchestration — from raw data to real-time executive retention intelligence.

<details>
<summary><b>📑 Executive Summary</b></summary>

**Business Problem:** Employee turnover is a silent profit killer. High-performing employees leaving the organization result in direct replacement costs (recruiting, onboarding) and indirect costs (lost productivity, institutional knowledge drain).

**Why it Matters:** In competitive talent markets, retaining top talent is a strategic imperative. Reactive HR interventions are costly and inefficient; organizations need predictive capabilities to identify flight risks before the resignation letter is submitted.

**Stakeholders:** CHRO (Chief Human Resources Officer), VP of HR Analytics, Business Unit Leaders, and Financial Planners.

**Expected Impact:** By moving from descriptive reporting to predictive intelligence, the enterprise can proactively intervene on high-risk employees, potentially saving millions in attrition-related costs and maintaining operational continuity.

> **Business Scenario:** *"The Executive Board needs real-time visibility into workforce stability, predicted attrition costs, and targeted retention strategies across all business units to optimize the $50M annual talent acquisition budget."*

</details>

<details>
<summary><b>🏗️ Architecture Overview</b></summary>

The platform is designed with an enterprise-grade modular architecture, ensuring data integrity, scalability, and seamless deployment into production pipelines.

**Quick Start:**
```bash
# 1. Train the model
source venv/bin/activate
python3 train.py

# 2. Start FastAPI backend
uvicorn app:app --host 127.0.0.1 --port 8000

# 3. Launch Streamlit dashboard (new terminal)
streamlit run streamlit_app.py

# OR: Run everything with Docker (once Docker is installed)
docker compose up --build
```

**Layers:**
- **Raw Data Layer:** Ingestion of HR systems data (CSV/DB), automated schema validation, and missing value checks.
- **Processing Layer:** Data cleaning, robust imputation, feature scaling, and advanced encoding (e.g., target encoding for categorical variables).
- **Analytics Layer:** Aggregation of organizational metrics and calculation of attrition rates across demographics.
- **Visualization Layer:** Interactive Plotly dashboards and executive risk heatmaps.

</details>

<details>
<summary><b>🔄 Project Workflow</b></summary>

1. **Data Collection:** Automated fetching of HR dataset with local fallback mechanisms. Ensures pipeline resilience.
2. **Data Cleaning:** Strict schema validation. Fails loudly on schema mismatch to prevent silent downstream errors.
3. **Transformation:** Handling class imbalance via SMOTE/SMOTETomek, feature scaling using StandardScaler, and categorical encoding.
4. **KPI Calculation:** Deriving enterprise metrics like Attrition Cost, Flight Risk Score, and Tenure benchmarks.
5. **Analysis:** Bivariate and multivariate analysis correlating compensation, overtime, and tenure with turnover.
6. **Machine Learning:** Training an ensemble of models (XGBoost, LightGBM, CatBoost, RandomForest) to predict attrition probabilities.
7. **Visualization:** Plotly-based interactive charts detailing SHAP feature importances and workforce risk heatmaps.
8. **Insights & Recommendations:** Generating individualized retention strategies based on ML outputs.

</details>

<details>
<summary><b>📊 Dataset & EDA</b></summary>

| Property | Value |
|---|---|
| Number of Rows | 1,470 |
| Number of Columns | 35 |
| Features | Demographics, Job-specific, Compensation, Employee History |
| Missing Values | Zero — pipeline robust against missingness |

**1. Attrition by Monthly Income & Job Role**
- **Key Insight:** Employees earning below the median bracket exhibit a significantly higher probability of attrition.
- **Executive Interpretation:** A targeted salary adjustment for at-risk roles yields a higher ROI than broad-based compensation hikes.

**2. OverTime & Work-Life Balance Impact**
- **Key Insight:** Employees working consistent overtime have a **3x higher flight risk**.
- **Executive Interpretation:** Immediate operational changes needed to distribute workload, particularly in Sales and R&D.

</details>

<details>
<summary><b>🎯 KPI Framework</b></summary>

| KPI Name | Formula | Business Meaning | Decision Supported |
|---|---|---|---|
| **Flight Risk Score** | Pr(Attrition = 1 \| X) | Probability of an employee leaving within 6 months | Targeted intervention & 1:1 meetings |
| **Attrition Cost** | Salary × 1.5 | Estimated financial loss if the employee leaves | Budget allocation for retention bonuses |
| **Compensation Ratio** | Income / Dept_Median_Income | How pay compares to internal peers | Off-cycle compensation reviews |
| **Promotion Velocity** | YearsAtCompany / Promotions | Rate at which an employee climbs the ladder | Succession planning and career pathing |

</details>

<details>
<summary><b>💡 Executive Business Insights</b></summary>

- **Revenue/Cost Insights:** Replacing current high-risk employees will cost the enterprise an estimated **$2.4M** in recruitment and lost productivity this fiscal year. Retaining just 20% of these individuals saves ~**$500k**.
- **Risk Insights:** The Engineering and Sales departments have the highest concentration of "High-Risk, High-Value" employees.
- **Operational Insights:** "OverTime" is the strongest leading indicator of burnout. Mandating workload rebalancing for flagged employees will yield immediate retention improvements.
- **Customer Insights:** High turnover in client-facing roles (Sales Execs) is historically correlated with decreased customer satisfaction and account churn.

</details>

<details>
<summary><b>⚙️ Data Engineering Design</b></summary>

- **ETL Process:** In-memory extraction via Pandas, strict schema enforcement, automated imputation, and transformation using Scikit-Learn pipelines.
- **Data Pipeline:** Object-oriented design for the ML pipeline, separating training, validation, and inference phases.
- **Data Validation:** "Fail Loudly" validation gates verify schema integrity.
- **Error Handling:** Robust try-except blocks around data ingestion and model loading.
- **Logging Strategy:** Integrated standard Python logging module to track pipeline execution states (INFO, WARNING, ERROR).
- **Limitations & Future:** Currently batch-processed. Future iteration requires migration to real-time streaming (Kafka) and a centralized feature store.

</details>

<details>
<summary><b>💻 Technical Stack</b></summary>

| Category | Technology |
|---|---|
| Language | Python 3.10+ |
| Data Processing | Pandas, NumPy |
| Machine Learning | Scikit-Learn, XGBoost, LightGBM, CatBoost |
| Interpretability | SHAP (Explainable AI) |
| Visualization | Plotly, Matplotlib, Seaborn |
| Imbalance Handling | Imbalanced-Learn (SMOTE) |
| Web Dashboard | Streamlit |
| Inference API | FastAPI + Uvicorn |
| Model Registry | MLflow (SQLite backend) |
| Containerization | Docker + Docker Compose |

</details>

<details>
<summary><b>📁 Repository Structure</b></summary>

```
.
├── Enterprise_Attrition_Intelligence_Platform_UPGRADED.ipynb  # Core analytical pipeline & models
├── HR-Employee-Attrition-All.csv                              # Raw dataset (fallback)
├── train.py                                                   # Production training script with MLflow tracking
├── app.py                                                     # FastAPI endpoint: predict, cost breakdown, retention plan
├── streamlit_app.py                                           # Interactive Streamlit web dashboard
├── Dockerfile                                                 # Container image: API + Streamlit
├── docker-compose.yml                                         # Orchestrates API (8000) + MLflow (5000) + Streamlit (8501)
├── models/                                                    # Saved model artifacts (joblib + schema JSON)
├── mlruns/                                                    # MLflow SQLite tracking store
├── requirements.txt                                           # Python dependencies
└── README.md                                                  # Executive project documentation
```

</details>

<details>
<summary><b>🏆 Key Technical Achievements</b></summary>

- Built an end-to-end Machine Learning pipeline utilizing advanced ensemble methods (XGBoost) to predict attrition.
- Designed and deployed a **FastAPI** prediction endpoint that yields flight risk probabilities, replacement costs, and personalized retention actions in real time.
- Integrated a dedicated model registry and experiment tracking server using **MLflow**, persisting parameters, validation scores, and registered models into a SQLite backend store.
- Orchestrated containerized microservices using **Docker and Docker Compose**, isolating the FastAPI inference engine and the MLflow dashboard for single-command local deployments.
- Designed an automated KPI computation framework that assigns financial risk ($) to employee turnover.
- Implemented advanced class imbalance handling (SMOTE) leading to a high-recall model to catch flight risks.
- Developed executive-level interactive dashboards using **Plotly** for stakeholder reporting.

</details>

<details>
<summary><b>🚀 Production Readiness Assessment</b></summary>

**Current State:** Enterprise-grade production microservice. Features automated logging, data validation gates, containerization, and a registered model tracking database.

**Completed Components:**
- ✅ **Model Registry:** Integrated MLflow locally, logging runs and registering model versions.
- ✅ **API Layer:** Implemented FastAPI serving predictions, costs, and custom retention plans.
- ✅ **Containerization:** Written Dockerfile and docker-compose.yml orchestrating both services.

**Future Enterprise Recommendations:**
- Incremental Loading: Shift from full batch to delta loads.
- Scheduling: Orchestrate pipeline using Apache Airflow.
- CI/CD & Cloud: Set up GitHub Actions CI/CD to deploy containers to AWS ECS/EKS or Google Cloud Run.

</details>

---

### 🤖 AI Recruiter Assistant | Enterprise Recruitment Suite

[![Repo](https://img.shields.io/badge/GitHub-AI--Recruiter--Assistant-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/DurgamPoojitha/AI-Recruiter-Assistant)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)
![HuggingFace](https://img.shields.io/badge/HuggingFace-FFD21E?style=flat-square&logo=huggingface&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

A high-performance, intelligence-driven local candidate matching, ranking, and ATS compliance analyzer. The platform uses sentence embeddings (`sentence-transformers/all-MiniLM-L6-v2`) for semantic matchmaking, SQLite for relational persistence, and interactive visualization dashboards built with React and FastAPI.

<details>
<summary><b>🌟 Key Enterprise Features</b></summary>

**1. Advanced AI Resume Parsing & Fraud Detection**
- **Semantic Matchmaking:** Uses NLP models to match candidate experience against job descriptions mathematically.
- **Fraud Detection Heuristics:** Automatically scans for known "Degree Mills", unrealistic timelines, and analyzes job-hopping behavior.
- **GitHub Detection:** Identifies candidate repositories and links to assess technical credibility.
- **Internship Isolation:** Correctly flags and maps internship vs. full-time experience for accurate filtering.

**2. Deep-Dive Candidate Modal & AI Interview Prep**
- **Technical Validation Generator:** The backend dynamically generates customized Beginner, Intermediate, and Advanced interview questions targeting the candidate's specific reported skills.
- **Skill Gap & Learning Roadmap:** For missing requirements, the system generates a 30-day learning roadmap.
- **AI Recruiter Decision Engine:** Provides an immediate assessment (e.g., "Strong Buy", "Pass").

**3. Advanced Pipeline Filtering & Analytics**
- **Relational Database Mapping:** Employs advanced SQL mapping tables (`candidate_skills`, `candidate_experience`) for hyper-fast querying.
- **Multi-Condition Filtering:** A sticky left-sidebar allows you to filter the Kanban board instantly by Target Skills, Minimum ATS Score, Years of Experience, Risk Level, and Internship Experience.
- **Live Analytics Widgets:** Real-time tracking of pipeline health, shortlisted counts, and hired metrics.

**4. Premium UI/UX**
- **Glassmorphism & Skeleton Loaders:** Modern design featuring animated skeleton states while waiting for backend AI inference.
- **Responsive Interactions:** Hover states, subtle shadows, and scale transformations provide a sleek, highly responsive feel.

</details>

<details>
<summary><b>🗄️ Architecture Stack</b></summary>

| Layer | Technology |
|---|---|
| Frontend | React (Vite) + Lucide Icons + Recharts |
| Backend | Python + FastAPI |
| Database | SQLite (Relational Design) |
| NLP Pipeline | Hugging Face `sentence-transformers/all-MiniLM-L6-v2` |
| Containerization | Docker & Docker Compose |

</details>

<details>
<summary><b>🛠️ Local Setup & Running the Application</b></summary>

**1. Start the Backend (FastAPI)**
```bash
# Clone the repository
git clone https://github.com/DurgamPoojitha/AI-Recruiter-Assistant.git
cd AI-Recruiter-Assistant

# Install dependencies
pip install -r requirements.txt

# Launch the FastAPI Backend
uvicorn backend.main:app --host 0.0.0.0 --port 8000
```
> **Note:** The first time you start the backend, it will download a ~90MB NLP model from Hugging Face. Subsequent starts will be instant.

**2. Start the Frontend (React)**
```bash
# Open a new terminal window
cd AI-Recruiter-Assistant/frontend-react

# Install Node dependencies
npm install

# Start the Vite development server
npm run dev
```
Navigate to `http://localhost:5173` in your browser to view the application!

</details>

<details>
<summary><b>🚀 Production Deployment Guide (100% Free via Oracle Cloud)</b></summary>

**Step 1: Claim Your Free Oracle Cloud Server**
1. Go to the [Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/) and sign up.
2. Click **Create a VM instance**.
3. Under *Image and Shape*, click "Edit":
   - Set Image to **Canonical Ubuntu 22.04**.
   - Set Shape to **Ampere ARM** (`VM.Standard.A1.Flex`).
   - Slide **OCPU count** to `4` and **Memory (RAM)** to `24 GB`.
4. Scroll down to "Add SSH keys" and select **Save private key**.
5. Click **Create** and wait for the status to turn green. Note your **Public IP Address**.

**Step 2: Open Cloud Firewalls**
- On your instance details page, click on your **Subnet**.
- Click **Default Security List → Add Ingress Rules**.
- Add two rules:
  - Source CIDR: `0.0.0.0/0`, Port: `80`
  - Source CIDR: `0.0.0.0/0`, Port: `8000`

**Step 3: Connect & Deploy**
```bash
# SSH into your server
chmod 400 path/to/your/ssh-key.key
ssh -i path/to/your/ssh-key.key ubuntu@YOUR_PUBLIC_IP

# Install Docker
sudo apt update
sudo apt install -y docker.io docker-compose git
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
# (Type `exit` and SSH back in so permissions apply)

# Open internal firewall ports
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 8000 -j ACCEPT
sudo netfilter-persistent save

# Clone and deploy
git clone https://github.com/DurgamPoojitha/AI-Recruiter-Assistant.git
cd AI-Recruiter-Assistant
docker-compose up -d --build
```
Access your live application by navigating to your **Public IP Address** in a web browser!

</details>
