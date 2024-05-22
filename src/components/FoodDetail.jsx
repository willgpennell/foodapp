import { useEffect } from "react";
export default function FoodDetail({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchFood() {
      //const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      //const data = await res.json();
      console.log(`${URL}?apiKey=${API_KEY}`);
      console.log(foodId);
      //console.log(data);
    }
    fetchFood();
  }, []);
  return <div>{foodId}</div>;
}
