import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./index.css";

function App() {
  const [food, setFood] = useState("");
  const [goal, setGoal] = useState("");
  const [mealPlan, setMealPlan] = useState("");

  const generateMealPlan = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/generate-meal-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ food, goal }),
      });

      const data = await response.json();
      setMealPlan(data.meal_plan);
    } catch (error) {
      console.error("Error fetching meal plan:", error);
      setMealPlan("Failed to generate meal plan.");
    }
  };

  return (
<div className="container">
    <h1 className="title">Dietitian AI</h1>
    <p className="description">Have you ever had that one food you just can't give up? Use this AI-powered dietitian to build your diet around your favorite food!</p>
    
    {/* Results Box - Appears above the inputs */}
    {mealPlan && (
        <div className="result-box">
            <ReactMarkdown>{mealPlan}</ReactMarkdown>
        </div>
    )}

    {/* Input Fields and Button - Stays near the bottom */}
    <div className="input-container">
        <div className="inputs">
            <input type="text" placeholder="Enter food" value={food} onChange={(e) => setFood(e.target.value)} />
            <input type="text" placeholder="Enter goal" value={goal} onChange={(e) => setGoal(e.target.value)} />
            <button onClick={generateMealPlan}>Generate</button>
        </div>
        <p>Enter a food item and a health goal (e.g., "Pizza" + "Muscle Gain") and click "Generate" to receive a custom meal plan.</p>
    </div>
</div>

  );
}

export default App;
