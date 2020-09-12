class PrintRecipe {
  constructor(recipe, element) {
    this.recipe = recipe;
    this.element = element;

    this.element.textContent = "";

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
    listItem.textContent =
      ingredient.getCurrentQuantity() +
      " " +
      ingredient.getUnit() +
      " " +
      ingredient.getName();
    this.list.appendChild(listItem);
  }
}

module.exports = PrintRecipe;