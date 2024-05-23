import Search from "./components/Search";
import { useState } from "react";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import Container from "./components/Container";
import "./App.css";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";

function App() {
  // spoonacular's data is an array, so useState needs to default to array
  // foodData should be global so all components can access it, not just Search.jsx
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div className="App">
      <Header />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
