# react-python-summarizer

# 🧠 React + Python Document Summarizer

A lightweight full-stack web app that simulates Azure-style AI summarization using:
- 🚀 React (Vite) frontend
- 🐍 FastAPI backend (Python)
- 🔁 REST API with JSON
- ⚙️ Jenkins CI/CD pipeline (optional)

---

## ✨ Features

- Paste a paragraph into the React UI
- Click “Summarize” to send text to the Python backend
- FastAPI trims the input to simulate a summary
- Summary is displayed instantly on the page
- Backend stores input/summary pair in memory (mock Cosmos DB)

---

## 🔧 Tech Stack

| Layer       | Tech              |
|-------------|-------------------|
| Frontend    | React (Vite)      |
| Backend     | FastAPI (Python)  |
| API Format  | JSON over REST    |
| Dev Tools   | VS Code, Git, GitHub |
| CI/CD       | Jenkins (optional) |

---

## 🖥️ Setup Instructions

### 🔹 Clone and Navigate

```bash
git clone https://github.com/Yahya9870/react-python-summarizer.git
cd react-python-summarizer
```

### 🔹 Backend (Python - FastAPI)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn
uvicorn main:app --reload
```

Visit: [http://localhost:8000/docs](http://localhost:8000/docs) for Swagger UI

---

### 🔹 Frontend (React - Vite)

```bash
cd frontend/vite-project
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 📸 Screenshot

![App Screenshot](https://user-images.githubusercontent.com/YOUR-ID/demo.png)

---

## ⚙️ CI/CD with Jenkins (Optional)

This project includes a `Jenkinsfile` that:
- Installs frontend + backend dependencies
- Builds frontend
- (Optional) Installs backend requirements
- Archives React build artifacts

---

## 🧪 Future Improvements

- Real AI integration (e.g. Azure OpenAI, HuggingFace)
- Store summaries in Cosmos DB or SQLite
- Add login / session history
- Dockerize for deployment

---

## 👋 Author

Built by Yahya9870 · [GitHub Profile](https://github.com/Yahya9870)

Feel free to fork, clone, or contribute!
