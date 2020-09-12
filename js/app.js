import { cloneDeep } from "lodash";
import fc from "fraction-calculator";

const Recipe = require("./Recipe/recipe");
const Ingredient = require("./Recipe/ingredient");

class PrintRecipe {
  constructor(recipe, element) {
    this.recipe = recipe;
    this.element = element;

    this.heading = document.createElement("h3");
    this.heading.textContent = this.recipe.name;
    this.element.appendChild(this.heading);

    this.list = document.createElement("ul");
    element.appendChild(this.list);

    this.recipe.ingredients.forEach((ingredient) => {
      this.appendIngredient(ingredient);
    });
  }

  appendIngredient(ingredient) {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient.getQuantity() + ' ' + ingredient.getUnit() + ' ' + ingredient.getName();
    this.list.appendChild(listItem);
  }
}

let nutellaGranolaRecipe = new Recipe("Nutella Granola");

nutellaGranolaRecipe.addIngredient(new Ingredient("Oat", 6, "cup"));
nutellaGranolaRecipe.addIngredient(new Ingredient("Nutella", 0.5, "cup"));
nutellaGranolaRecipe.addIngredient(new Ingredient("Olive oil", 0.33, "cup"));
nutellaGranolaRecipe.addIngredient(new Ingredient("Honey", 3, "tbsp"));
nutellaGranolaRecipe.addIngredient(new Ingredient("Salt", 0.25, "tsp"));

// nutellaGranolaRecipe.printRecipe();

// let nutellaGranolaRecipe2 = cloneDeep(nutellaGranolaRecipe);

// nutellaGranolaRecipe2.multiply(2);

// nutellaGranolaRecipe2.printRecipe();

nutellaGranolaRecipe.multiply(0.5);

new PrintRecipe(
  nutellaGranolaRecipe,
  document.getElementById("app")
);

// let ingredient = 'nutella';
// let pleural_ingredient = pluralize(ingredient, 3);
// let singular_ingredient = singular(pleural_ingredient);
// document.body.textContent =
//   "1 " + singular_ingredient + " or 2 " + pleural_ingredient;
