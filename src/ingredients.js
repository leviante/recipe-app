import { getRecipes, saveRecipe } from "./recipes";

const addIngredient = id => {
  //Get all recipes
  const recipes = getRecipes();

  //Find the individual recipe
  const recipe = recipes.find(recipe => recipe.id === id);

  //Get the input value and assign it to an ingredient object
  const ingredientInput = document.querySelector(".ingredient-text");
  const ingredientText = ingredientInput.value;

  const ingredient = {
    text: ingredientText,
    have: false
  };

  //Add the object to individual recipe's ingredients
  recipe.ingredients.push(ingredient);
  saveRecipe();
  ingredientInput.value = "";
};

const updateIngredient = (id, name, update) => {
  //Get all recipes
  const recipes = getRecipes();

  //Find the individual recipe
  const recipe = recipes.find(recipe => recipe.id === id);

  //Find the updated ingredient
  const ingredient = recipe.ingredients.find(
    ingredient => ingredient.text === name
  );

  if (typeof update.checked === "boolean") {
    ingredient.have = update.checked;
  }

  if (typeof update.remove === "boolean") {
    //Remove the ingredient
    const index = recipe.ingredients.findIndex(
      ingredient => ingredient.text === name
    );

    if (index > -1) {
      recipe.ingredients.splice(index, 1);
    }
  }

  saveRecipe();
};

export { addIngredient, updateIngredient };
