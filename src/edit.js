import { deleteRecipe, updateRecipe } from "./recipes";
import { initializeEditPage, renderIngredients } from "./view";
import { addIngredient, updateIngredient } from "./ingredients";

const id = location.hash.substring(1);

//Fill initial title and body inputs with recipe information
initializeEditPage(id);
//Fill ingredients if there's any
renderIngredients(id);

//Update recipe title when title is changed
document.querySelector(".recipe-title").addEventListener("input", e => {
  updateRecipe(id, {
    title: e.target.value
  });
});

//Update recipe body when body is changed
document.querySelector(".recipe-body").addEventListener("input", e => {
  updateRecipe(id, {
    body: e.target.value
  });
  console.log(e.target.value);
});

//If user submits the ingredient form, create and render ingredients
document.querySelector(".ingredient-form").addEventListener("submit", e => {
  e.preventDefault();
  addIngredient(id);
  renderIngredients(id);
});

//Update ingredient and remove ingredient, by using event delegation (listening parent element instead)
document
  .querySelector(".ingredients-container")
  .addEventListener("click", e => {
    //Checking if clicked element is label - by comparing it's class name
    if (e.path[1].classList.contains("label")) {
      //Grab checkbox and label text to update
      const checkboxValue = e.path[1].querySelector("input").checked;
      const ingredientText = e.path[1].querySelector("p").textContent;

      updateIngredient(id, ingredientText, {
        checked: checkboxValue
      });
    }

    //Checking if clicked element is remove option

    if (e.path[0].classList.contains("remove-option")) {
      console.log("clicking remove!!");

      const ingredientText = e.path[1].querySelector("p").textContent;

      updateIngredient(id, ingredientText, {
        remove: true
      });

      renderIngredients(id);
    }
  });

//Delete recipe when clicked remove button
document.querySelector("#delete-recipe-btn").addEventListener("click", () => {
  deleteRecipe(id);
  location.assign("/index.html");
});

//Go back to home page when clicked return button
document.querySelector("#return-home-btn").addEventListener("click", () => {
  location.assign("/index.html");
});
