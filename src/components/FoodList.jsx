import FoodItem from "./FoodItem";
export default function FoodList({ foodData, setFoodId, setLoading }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem
          key={food.id}
          food={food}
          setFoodId={setFoodId}
          setLoading={setLoading}
        />
      ))}
    </div>
  );
}
