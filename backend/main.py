from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simulated database
summary_db = []

class TextRequest(BaseModel):
    text: str

@app.post("/summarize")
async def summarize(request: TextRequest):
    dummy_summary = request.text[:100] + "..."  # Simulated summary
    summary_db.append({
        "input": request.text,
        "summary": dummy_summary
    })
    return {"summary": dummy_summary}
