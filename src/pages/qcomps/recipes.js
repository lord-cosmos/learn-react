export const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: new Set(["tomatoes", "cucumber", "onion", "olives", "feta"]),
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: new Set([
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ]),
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: new Set([
      "chickpeas",
      "olive oil",
      "garlic cloves",
      "lemon",
      "tahini",
    ]),
  },
];

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => {
        return (
          <ol key={recipe.id}>
            <li>name : {recipe.name}</li>
            <li>Ingredients:</li>
            <ul>
              {[...recipe.ingredients].map((ingredient) => {
                return <li key={recipe.id + ingredient}>{ingredient}</li>;
              })}
            </ul>
            <div style={{ marginTop: "16px", border: "1px solid black" }}></div>
          </ol>
        );
      })}
    </div>
  );
}
