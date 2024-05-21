export default function FoodItem({ food }) {
  return (
    <div>
      <img src={food.image} alt="" />
      <h2>{food.title}</h2>
      <button>View Recipe</button>
    </div>
  );
}
