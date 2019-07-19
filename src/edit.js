import { deleteRecipe, updateRecipe } from "./recipes";
import { initializeEditPage } from "./view";

const id = location.hash.substring(1);

initializeEditPage(id);

//Fill initial title and body inputs with recipe information

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

//Delete recipe when clicked remove button
document.querySelector("#delete-recipe-btn").addEventListener("click", () => {
  deleteRecipe(id);
  location.assign("/index.html");
});

//Go back to home page when clicked return button
document.querySelector("#return-home-btn").addEventListener("click", () => {
  location.assign("/index.html");
});
