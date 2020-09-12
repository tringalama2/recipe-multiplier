const PrintRecipe = require("../Views/print-recipe");

class Recipe {
  constructor(name) {
    this.name = name;
    this.ingredients = [];
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }

  multiply(multiplier) {
    this.ingredients.forEach((ingredient, index, array) => {
      ingredient.multiply(multiplier);
    });
  }

  printHtml(element) {
    new PrintRecipe(this, element);
  }
}

module.exports = Recipe;
