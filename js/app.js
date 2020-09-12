import { cloneDeep } from "lodash";
import fc from "fraction-calculator";

const Recipe = require("./Recipe/recipe");
const Ingredient = require("./Recipe/ingredient");



let nutellaGranolaRecipe = new Recipe("Nutella Granola");

// define recipe
nutellaGranolaRecipe.addIngredient(new Ingredient("Oat", 6, "cup"));
nutellaGranolaRecipe.addIngredient(new Ingredient("Nutella", 0.5, "cup"));
nutellaGranolaRecipe.addIngredient(new Ingredient("Olive oil", 0.33, "cup"));
nutellaGranolaRecipe.addIngredient(new Ingredient("Honey", 3, "tbsp"));
nutellaGranolaRecipe.addIngredient(new Ingredient("Salt", 0.25, "tsp"));


const recipeDiv = document.getElementById("recipe");
const multiplierElement = document.getElementById("recipeMultiplier");

nutellaGranolaRecipe.printHtml(recipeDiv);

multiplierElement.addEventListener("change", (event) => {
  const multiplyBy = event.target.value;
  nutellaGranolaRecipe.multiply(multiplyBy);
  nutellaGranolaRecipe.printHtml(recipeDiv);
});


// let ingredient = 'nutella';
// let pleural_ingredient = pluralize(ingredient, 3);
// let singular_ingredient = singular(pleural_ingredient);
// document.body.textContent =
//   "1 " + singular_ingredient + " or 2 " + pleural_ingredient;
