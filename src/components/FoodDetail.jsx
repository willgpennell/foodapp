import { useEffect, useState } from "react";
export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image}></img>
      </div>
      <span>
        <strong>⏰ {food.readyInMinutes} Minutes</strong>
      </span>
      <span>
        <strong>🧑‍🧑‍🧒‍🧒 {food.servings} Servings</strong>
      </span>
      <span>{food.vegetarian ? "🥕 Vegetarian" : "🍔 Non-Vegetarian"}</span>
      <span>{food.vegan ? "🥦 Vegan" : "🍟 Non-Vegan"}</span>
      <div>
        <span>$ {food.pricePerServing}</span>
      </div>
      <div>
        <h2>Instructions</h2>
        {food.analyzedInstructions}
      </div>
    </div>
  );
}
