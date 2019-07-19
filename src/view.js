import { getRecipes } from "./recipes";
import { getFilters } from "./filters";

//This file contains render functions to generate DOM elements for recipes and messages

//Creates recipe elements in index.html
const renderRecipes = () => {
  //main element to append stuff
  const recipesElement = document.querySelector(".recipes");

  const recipes = getRecipes();
  const filters = getFilters();

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(filters.searchText)
  );

  //Empty the HTML to not render same stuff everytime
  recipesElement.innerHTML = "";

  //For each recipe, create a card wrapper, a title and ingredient element
  filteredRecipes.forEach(recipe => {
    //main card wrapper - has .recipe for styling
    const recipeElement = document.createElement("a");
    recipeElement.classList.add("recipe");

    //set it's href so that user will be navigated to the edit page
    recipeElement.setAttribute("href", `/edit.html#${recipe.id}`);

    //Element to store recipe title - if it has no title, replace with "Untitled Recipe"
    const h3 = document.createElement("h3");
    if (recipe.title) {
      h3.textContent = recipe.title;
    } else {
      h3.textContent = "Untitled Recipe";
    }

    //Add title to main wrapper and append wrapper to card container
    recipeElement.append(h3);
    recipesElement.append(recipeElement);
  });
};

//Updates edit.html with appropriate recipe values
const initializeEditPage = id => {
  const recipes = getRecipes();

  const recipe = recipes.find(recipe => recipe.id === id);

  //grab recipe title and body, set their values for each recipe title and body
  const recipeTitle = document.querySelector(".recipe-title");
  recipeTitle.value = recipe.title;

  const recipeBody = document.querySelector(".recipe-body");
  recipeBody.value = recipe.body;
};

//Generate "There's no recipe" message for index.html if there's no recipe added
const noRecipeMessage = () => {
  const recipes = getRecipes();

  //If there's no recipe, generate a message and insert before the button
  if (!recipes.length) {
    //Create a p element and add the content
    const message = document.createElement("p");
    message.textContent =
      "Currently there's no recipe here. Click 'Add Recipe' to add a new recipe.";

    const parentNode = document.querySelector("#container");
    const referenceNode = document.querySelector(".add-recipe-btn");

    parentNode.insertBefore(message, referenceNode);
  }
};

export { renderRecipes, initializeEditPage, noRecipeMessage };
