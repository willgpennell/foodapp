import Search from "./Search";
import { useState } from "react";

function App() {
  // spoonacular's data is an array, so useState needs to default to array
  // foodData should be global so all components can access it, not just Search.jsx
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Search foodData={foodData} setFoodData={setFoodData} />
    </>
  );
}

export default App;
