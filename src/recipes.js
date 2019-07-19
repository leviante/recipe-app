import uuidv4 from "uuid/v4";

let recipes;

const loadRecipe = () =>
  localStorage.getItem("recipes")
    ? JSON.parse(localStorage.getItem("recipes"))
    : [];

const createRecipe = () => {
  const recipeID = uuidv4();

  const recipe = {
    id: recipeID,
    title: "",
    body: "",
    ingredients: []
  };

  recipes.push(recipe);
  saveRecipe();
  return recipeID;
};

const updateRecipe = (id, updates) => {
  const recipe = recipes.find(recipe => recipe.id === id);

  if (typeof updates.title === "string") {
    recipe.title = updates.title;
  }
  if (typeof updates.body === "string") {
    recipe.body = updates.body;
  }

  saveRecipe();
};

const saveRecipe = () => {
  localStorage.setItem("recipes", JSON.stringify(recipes));
};

const deleteRecipe = id => {
  const recipeIndex = recipes.findIndex(recipe => recipe.id === id);

  if (recipeIndex > -1) {
    recipes.splice(recipeIndex, 1);
    saveRecipe();
  }
};

const getRecipes = () => (recipes = loadRecipe());

recipes = loadRecipe();

export { createRecipe, getRecipes, deleteRecipe, updateRecipe, saveRecipe };
