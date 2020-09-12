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
      ingredient.quantity *= multiplier;
    });
  }
}

module.exports = Recipe;
