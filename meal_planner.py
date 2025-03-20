import google.generativeai as genai
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware  # Import CORS Middleware

# Configure Google Gemini API
genai.configure(api_key="YOUR GEMINI API KEY GOES HERE")

app = FastAPI()

# Enable CORS (Adjust origins as needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (restrict for production)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

class MealPlanRequest(BaseModel):
    food: str
    goal: str

def generate_gemini_response(prompt):
    model = genai.GenerativeModel("gemini-1.5-flash-latest")
    response = model.generate_content(prompt)
    return response.text if response else "Error generating response"

@app.post("/generate-meal-plan")
def generate_meal_plan(request: MealPlanRequest):
    prompt = f"Generate a meal plan that includes {request.food} while supporting {request.goal}. Bold key points and use bullet points."
    try:
        response = generate_gemini_response(prompt)
        return {"meal_plan": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
def health_check():
    return {"status": "ok"}

# Example usage
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
