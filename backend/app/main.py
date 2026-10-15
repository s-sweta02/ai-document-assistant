
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="AI Document Intelligence Assistant",
    description="API for document processing and AI-powered question answering.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "AI Document Intelligence Assistant API is running!"
    }


@app.get("/health")
def health_check():
    return {"status": "healthy"}
