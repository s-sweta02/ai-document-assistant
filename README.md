# AI Document Intelligence Assistant

An AI-powered document processing application designed to help users upload documents, understand their contents, and retrieve information efficiently.

The project uses **Next.js** for the frontend and **FastAPI** for the backend. It is being developed as an independent portfolio project, with the goal of integrating local large language models for document question answering.

## 1. Project Overview

Documents often contain useful information that takes time to locate manually. This project aims to simplify document analysis by providing an interface for uploading files, extracting information, and asking questions about their contents.

The planned application will support:

- Document upload and text extraction.
- AI-powered question answering using document content.
- Structured information extraction.
- Retrieval of relevant passages from documents.
- Source-grounded answers to improve transparency.

**Current status:** The initial frontend and backend are operational. The dashboard can communicate with the FastAPI health-check endpoint. Document processing and AI question answering are planned development stages.

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| Python 3.11 | Backend development |
| FastAPI | REST API development |
| Uvicorn | Running the backend server |
| PyMuPDF | PDF text extraction |
| Next.js | Frontend application |
| React | Interactive user interface |
| TypeScript | Type-safe frontend development |
| Tailwind CSS | Frontend styling |
| Ollama | Local AI model integration |
| ChromaDB | Planned document retrieval and vector storage |
| Git | Version control |

## 3. Project Architecture

The application follows a frontend-backend architecture.

```text
User
  |
  v
Next.js Frontend
localhost:3000
  |
  | HTTP requests
  v
FastAPI Backend
127.0.0.1:8000
  |
  v
Document Processing
  |
  v
Text Chunking and Retrieval
  |
  v
Local LLM through Ollama
  |
  v
Answer with Supporting Sources
```

The document-processing, retrieval, and AI stages represent the planned architecture and are not yet implemented.

### Frontend

The Next.js frontend provides the user interface. It currently includes a dashboard and a button to check the backend connection.

### Backend

The FastAPI backend exposes HTTP endpoints. It currently provides a home endpoint and a health-check endpoint.

### AI Processing

Ollama is installed locally and will be used for AI-powered document analysis. Document retrieval and model integration will be added in subsequent development stages.

## 4. Project Structure

```text
ai-document-assistant/
│
├── backend/
│   ├── .venv/
│   ├── app/
│   │   ├── __init__.py
│   │   └── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── app/
│   │   └── page.tsx
│   ├── public/
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

The Python virtual environment is stored inside `backend/.venv`. The frontend dependencies are managed separately through npm.

## 5. Prerequisites

Install or configure the following tools before running the application:

- Python 3.11
- Node.js and npm
- Git
- Visual Studio Code

Ollama is required when the local AI integration is implemented.

## 6. Installation and Setup

### Step 1: Clone the repository

If you are setting up the project on another computer:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd ai-document-assistant
```

Replace the placeholder with your repository URL.

### Step 2: Set up the backend

From the project root, create the virtual environment:

```powershell
py -m venv backend/.venv
```

Activate it in Windows PowerShell:

```powershell
.\backend\.venv\Scripts\Activate.ps1
```

Install the backend dependencies:

```powershell
python -m pip install -r backend/requirements.txt
```

### Step 3: Run the backend

From the project root, run:

```powershell
python -m uvicorn app.main:app --reload --app-dir backend
```

Alternatively, enter the backend directory first:

```powershell
cd backend
python -m uvicorn app.main:app --reload
```

The backend will be available at:

`http://127.0.0.1:8000`

Interactive API documentation is available at:

`http://127.0.0.1:8000/docs`

### Step 4: Set up the frontend

Open a second terminal and run:

```powershell
cd frontend
npm install
```

Start the development server:

```powershell
npm run dev
```

The frontend will be available at:

`http://localhost:3000`

Keep both development servers running while using the application.

## 7. Available API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Returns a welcome message |
| GET | `/health` | Checks whether the backend is healthy |
| GET | `/docs` | Opens the interactive API documentation |

### Health-check example

Request:

```http
GET http://127.0.0.1:8000/health
```

Response:

```json
{
  "status": "healthy"
}
```

The frontend uses this endpoint to verify connectivity. A successful response changes the dashboard status to `Connected`.

## 8. How the Frontend Communicates with the Backend

1. The user opens the Next.js dashboard.
2. The user clicks the **Check connection** button.
3. The frontend sends an HTTP GET request to the FastAPI `/health` endpoint.
4. FastAPI returns a JSON response.
5. The frontend reads the response and updates the displayed connection status.

Cross-Origin Resource Sharing (CORS) is configured in FastAPI to allow requests from `http://localhost:3000` during local development.

## 9. Planned Development Roadmap

### Phase 1: Application Foundation — Completed

- Set up the Next.js frontend.
- Set up the FastAPI backend.
- Configure a dedicated Python virtual environment.
- Implement the backend health-check endpoint.
- Establish frontend-to-backend communication.

### Phase 2: Document Processing — Planned

- Upload PDF and TXT files.
- Validate file types and file sizes.
- Extract text from PDFs using PyMuPDF.
- Display document processing status and errors.

### Phase 3: AI Integration — Planned

- Integrate a suitable local Ollama model.
- Split document text into manageable chunks.
- Generate embeddings and retrieve relevant passages.
- Answer user questions using retrieved document content.

### Phase 4: Information Extraction — Planned

- Extract selected fields such as names, dates, amounts, and deadlines.
- Validate extracted data using structured schemas.
- Display relevant source passages alongside results.

### Phase 5: Testing and Deployment — Planned

- Add backend and frontend tests.
- Evaluate retrieval quality and answer accuracy.
- Improve error handling and input validation.
- Document deployment and configuration procedures.

## 10. Troubleshooting

**Frontend cannot connect to the backend**

- Confirm that the FastAPI server is running.
- Open `http://127.0.0.1:8000/health` in a browser.
- Check that the frontend is using the correct backend URL.
- Verify the CORS configuration if the browser reports a cross-origin error.

**Python command is not recognized**

Activate the project's virtual environment before running Python commands:

```powershell
.\backend\.venv\Scripts\Activate.ps1
```

**Frontend does not start**

Run these commands from the frontend directory:

```powershell
npm install
npm run dev
```

Check the terminal output for dependency or port errors.

## 11. Security and Privacy

- Do not commit virtual environments, secrets, or private configuration files to Git.
- Use synthetic or public sample documents during development.
- Validate uploaded files before processing.
- Avoid exposing the local development server publicly without appropriate security controls.
- Do not use confidential company documents or proprietary data without authorization.

## 12. Learning Outcomes

This project provides practical experience in:

- Full-stack application development.
- REST API design and frontend-backend integration.
- Python environment and dependency management.
- Local LLM integration.
- Document processing and retrieval-augmented generation (RAG).
- Testing, version control, and technical documentation.

## License

Choose an appropriate license before publishing the repository publicly. Until then, the project is an independent work in progress.
