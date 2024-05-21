import Search from "./components/Search";
import { useState } from "react";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import "./App.css";

function App() {
  // spoonacular's data is an array, so useState needs to default to array
  // foodData should be global so all components can access it, not just Search.jsx
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Header />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
