export default function AboutUs() {
  const ingredients = [
    "Handmade Mozzarella: Our mozzarella is hand-stretched daily by our skilled chefs, using traditional Italian methods.",
    "Tomatoes: We craft our signature sauce using a perfect blend of authentic San Marzano tomatoes imported from Italy and our home-grown, sun-ripened tomatoes, offering a unique and rich flavor profile.",
    "48-Hour Cold Fermented Dough: Our pizza crust stands out due to its 48-hour cold fermentation process. This method ensures a light, airy, and digestible crust with deeper flavors, setting the foundation for our pizzas' unmatched taste.",
    "Authentic Wood-Fired Oven: Every pizza benefits from the smoky aroma and crisp perfection achieved in our traditional wood-fired oven. This age-old method, cherished in Italy, brings out the soul of every ingredient."
  ];

  return (
    <>
      <h2>About Us</h2>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </>
  );
}
