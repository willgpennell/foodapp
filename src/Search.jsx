import { useState, useEffect } from "react";

const URL = `https://api.spoonacular.com/recipes/complexSearch`;
const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY);

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </>
  );
}
