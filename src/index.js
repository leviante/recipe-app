import { createRecipe } from "./recipes";
import { renderRecipes, noRecipeMessage } from "./view";
import { updateFilter } from "./filters";

noRecipeMessage();
renderRecipes();

//Listen Add Recipe Btn -> When user clicks, redirect them to edit page
document.querySelector(".add-recipe-btn").addEventListener("click", () => {
  const id = createRecipe();
  location.assign(`/edit.html#${id}`);
});

//Listen filter input, when it changes, render appropriate recipes
document.querySelector("#search-recipe").addEventListener("input", e => {
  updateFilter({
    searchText: e.target.value.toLowerCase()
  });
  renderRecipes();
});

//Listen reset button, delete all when user clicks it
document.querySelector(".reset-btn").addEventListener("click", () => {
  localStorage.clear();
  noRecipeMessage();
  renderRecipes();
});
