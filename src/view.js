import { getRecipes } from "./recipes";
import { getFilters } from "./filters";

//This file contains render functions to generate DOM elements for recipes and messages

//Creates recipe elements in index.html
const renderRecipes = () => {
  //main element to append stuff
  const recipesElement = document.querySelector(".recipes");

  //Get required information
  const recipes = getRecipes();
  const filters = getFilters();

  //Filter recipes to render only necessary stuff
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(filters.searchText)
  );

  //Empty the HTML to not render same stuff everytime
  recipesElement.innerHTML = "";

  //For each filtered recipe (all if not filtered), create a card wrapper, a title and ingredient element
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
    recipeElement.appendChild(h3);

    //If user has all of the ingredients, generate "You have all of the ingredients."
    //If user has some of the ingredients, generate "You have some of the ingredients."
    //If user has nothing, generate "You have none of the ingredients."
    //If there's no ingredient, generate "There's no ingredient specified."
    const test = recipe.ingredients.some(
      ingredients => ingredients.have === true
    );
    const testEvery = recipe.ingredients.every(
      ingredients => ingredients.have === true
    );

    if (recipe.ingredients.length === 0) {
      generateIngredientMessage(recipeElement, {
        ingredientCount: "none"
      });
    } else if (testEvery) {
      generateIngredientMessage(recipeElement, {
        state: "all"
      });
    } else if (test) {
      generateIngredientMessage(recipeElement, {
        state: "some"
      });
    } else if (!test) {
      generateIngredientMessage(recipeElement, {
        state: "none"
      });
    }

    //append wrapper to card container
    recipesElement.appendChild(recipeElement);
  });
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

//Render ingredients for edit.html
const renderIngredients = id => {
  //get all recipes
  const recipes = getRecipes();
  //get the recipe
  const recipe = recipes.find(recipe => recipe.id === id);
  //get it's ingredients property
  const ingredients = recipe.ingredients; //array of ingredients (obj)

  //To avoid writing same stuff, empty the current html first
  document.querySelector(".ingredients-container").innerHTML = "";

  //For each ingredient, render a ingredient card and append to main div
  ingredients.forEach(ingredient => {
    //create ingredient card that will contain checkbox, text and remove option
    const ingredientElement = document.createElement("div");
    //Add class for styling
    ingredientElement.classList.add("ingredient");

    //create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    //set its state to "have" value
    checkbox.checked = ingredient.have;

    //create text element, set its content to ingredient text
    const ingredientText = document.createElement("p");
    ingredientText.textContent = ingredient.text;

    //create label, add checkbox and text into it
    const label = document.createElement("label");
    label.classList.add("label");
    label.appendChild(checkbox);
    label.appendChild(ingredientText);

    //create remove option
    const removeElement = document.createElement("span");
    removeElement.classList.add("remove-option");
    removeElement.textContent = "remove";

    //Append all to ingredient card
    ingredientElement.appendChild(label);
    ingredientElement.appendChild(removeElement);

    //Append the card to ingredients-container
    document
      .querySelector(".ingredients-container")
      .appendChild(ingredientElement);
  });
};

const generateIngredientMessage = (parent, messageObj) => {
  //Create a paragraph element
  const message = document.createElement("p");

  if (!messageObj.ingredientCount) {
    message.textContent = `You have ${messageObj.state} of the ingredients.`;
  } else {
    message.textContent = "There's no ingredient specified.";
  }

  parent.appendChild(message);
};

export {
  renderRecipes,
  initializeEditPage,
  noRecipeMessage,
  renderIngredients
};
