from fastapi import FastAPI
from meal_planner import create_meal_plan

app = FastAPI()

@app.get("/meal_plan")
def get_meal_plan(food: str, goal: str):
    result = create_meal_plan(food, goal)
    return {"meal_plan": result}
