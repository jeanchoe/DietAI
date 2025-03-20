# DietAI

DietAI is an AI-powered diet planning assistant that generates personalized meal plans based on a user's favorite food and health goals. Whether you're looking to lose weight, gain muscle, or maintain a balanced diet, DietAI tailors meal plans while incorporating the food you love.

## Features

- Custom Meal Plans – Generate diet plans that include your favorite foods while aligning with your health goals.
- Health-Conscious Suggestions – Balanced nutrition with portion control, whole foods, and protein-rich meals.
- FastAPI Backend – API-powered backend for quick meal plan generation.
- ChatGPT-Style UI – Dark mode UI with an easy-to-read, structured layout.
- AI-Powered – Uses Google Gemini to generate meal plans dynamically.
- Upcoming: CrewAI + OpenAI Integration – Currently, DietAI is powered by Google Gemini, but a transition to CrewAI with OpenAI is in the works for improved customization and multi-agent workflows.

## Usage

1. Enter a food (e.g., "Pizza") and a health goal (e.g., "Weight Loss").
2. Click "Generate" to receive a personalized meal plan.
3. Review the plan and adjust as needed.
4. (Upcoming) OpenAI + CrewAI integration will allow multi-agent diet planning.

## Future Enhancements

- CrewAI Agents – Implement AI agents for even more intelligent meal planning.
- OpenAI Integration – Transition from Gemini to OpenAI models.
- Cloud Deployment – Make DietAI accessible online.
- Macro & Calorie Breakdown – More nutritional insights.

## Tech Stack

- Frontend: React, CSS (dark mode UI)
- Backend: FastAPI (Python)
- AI Model: Google Gemini (soon integrating CrewAI + OpenAI)
- Hosting: Local development (future cloud deployment planned)

## Installation & Setup

### Clone the Repository
git clone https://github.com/yourusername/DietAI.git cd DietAI

### Backend Setup (FastAPI + Gemini API)

Install dependencies:
pip install -r requirements.txt

Set up environment variables:

Create a `.env` file and add your Google Gemini API key:
GOOGLE_API_KEY=your_gemini_api_key_here

Run FastAPI server:
uvicorn meal_planner:app --reload

The API should now be running at http://127.0.0.1:8000

### Frontend Setup (React)

Navigate to frontend directory:

cd meal-planner-frontend

Install dependencies:
npm install

Start the development server:
npm start


The frontend should now be live at http://localhost:3000
