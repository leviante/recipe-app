
# Recipe App 

#### *Create your recipes, add ingredients, visit them whenever you need!*

## General Info

Recipe App is a basic *CRUD* (Create-Retrieve-Update-Delete) application that is created entirely with vanilla JavaScript.

It allows users to **create new recipes, add necessary ingredients and allows the user to track their ingredients** by checking/unchecking them. It also gives user a feedback about their ingredients.

The app also saves recipes and ingredients thus the user can freely visit the website sometime later and pick up where he/she left.

This project is created to put my vanilla JavaScript skills to practice. It is also the last challenge that is presented in *The Modern JavaScript Bootcamp (2019)* by Andrew Mead on Udemy.

Despite the project being introduced in an online course, **there is no solution provided by the instructor**.

To visit the website, click [here](https://leviante-recipeapp.netlify.com/).

## How To Use

1. Navigate to the website provided above.
2. In initial load, you will see this message:

 `Currently there's no recipe here. Click 'Add Recipe' to add a new recipe.`

 To add a recipe, click `Add Recipe` button. This will navigate you to a new page.
3. On this page, you will see 2 main inputs, one for **recipe name** and one for **recipe description**.

 Fill the areas with necessary information. The **recipe name** is the one that will be visible in main page, so keep that in mind.

4. Once you are done with filling, head on to the **Ingredients** section.

 This is the place where you can edit the ingredients for your recipe. Write down the ingredient you want to add to the text input (*Add ingredient...*) and click the `Add` button.

 After clicking, the ingredient will appear above the text input.

5. You can check the ingredients that you already have or if you typed a wrong ingredient, you can remove them by clicking `remove`.

6. Press `Return Home` button if you are done with creating your recipe.
 
 If you want to remove the recipe, press `Delete Recipe`.

 **Note**: Once you delete the recipe, there is no turning back. Be careful!

Once you created your recipe, you can see it on main page. It contains the **recipe name** you entered and a **feedback** about ingredients.

If you didn't specify any recipe name, you will see **Untitled Recipe**.

Regarding ingredients:

- If you checked some of the ingredients, you will see: **You have some of the ingredients.**
- If you checked all of the ingredients, you will see: **You have all of the ingredients.**
- If you checked nothing, you will see: **You have none of the ingredients.**
- If you didn't specify any ingredients, you will see: **There's no ingredient specified.**

If you want to filter your recipes, you can use the `Search recipe` input to filter by **recipe name**. The list will be updated as you type.

If you want to **delete all of the recipes**, you can click `Delete All` button. This action cannot be undone so be careful!

## Used Technologies

- Html
- Css
- Sass
- JavaScript
- Babel
- Webpack
- NPM
