import { useEffect, useState } from "react";
import styles from "./FoodDetail.module.css";
export default function FoodDetail({ foodId, isLoading, setLoading }) {
  const [food, setFood] = useState({});

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    fetchFood();
  }, [foodId, API_KEY, URL, setLoading]);
  return (
    <div className={styles.details}>
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
        {isLoading ? (
          <p> Loading... </p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => (
            <li key={step.number}>{step.step}</li>
          ))
        )}
      </div>
    </div>
  );
}
