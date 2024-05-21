export default function FoodItem({ food }) {
  return <h1 key={food.id}>{food.title}</h1>;
}
