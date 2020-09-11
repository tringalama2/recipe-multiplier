import { clone, cloneDeep } from "lodash"
import pluralize, { singular, plural, isSingular } from "pluralize";

let ingredient = 'nutella';
let pleural_ingredient = pluralize(ingredient, 3);
let singular_ingredient = singular(pleural_ingredient);
document.body.textContent =
  "1 " + singular_ingredient + " or 2 " + pleural_ingredient;


class Ingredient {
  constructor(name, quantity, unit) {
    this.name = name;
    this.quantity = quantity;
    this.unit = unit;
  }

  getName() {
      if (!isSingular(this.name) && this.quantity === 1) {
          return singular(this.name);
      } else if (isSingular(this.name) && this.quantity !== 1) {
          return pluralize(this.name);
      }
      return this.name;
  }

  getUnit() {
      if (!isSingular(this.unit) && this.quantity === 1) {
        return singular(this.unit);
      } else if (isSingular(this.unit) && this.quantity !== 1) {
        return pluralize(this.unit);
      }
      return this.unit;
  }
}

class Recipe {
  constructor(name) {
    this.name = name;
    this.ingredients = [];
  }

  addIngredient(ingredient)
  {
    this.ingredients.push(ingredient);
  }

  multiply(multiplier)
  {
      this.ingredients.forEach((ingredient, index, array) => {
          ingredient.quantity *= multiplier;
      });
  }

  printRecipe()
  {
      console.log(this);
  }
}

let nutellaGranolaRecipe = new Recipe('Nutella Granola');

nutellaGranolaRecipe.addIngredient(new Ingredient('Oats', 6, 'cup'));
nutellaGranolaRecipe.addIngredient(new Ingredient('Nutella', 0.5, 'cup'));
nutellaGranolaRecipe.addIngredient(new Ingredient('Olive oil', 0.33, 'cup'));
nutellaGranolaRecipe.addIngredient(new Ingredient('Honey', 3, 'tbsp'));
nutellaGranolaRecipe.addIngredient(new Ingredient('Salt', 0.25, 'tsp'));

nutellaGranolaRecipe.printRecipe();

let nutellaGranolaRecipe2 = cloneDeep(nutellaGranolaRecipe);

nutellaGranolaRecipe2.multiply(2);

nutellaGranolaRecipe2.printRecipe();
