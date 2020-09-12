
import { Fractionalize, FractionalizeOptions } from "fractionalize";
import pluralize, { singular, plural, isSingular } from "pluralize";

class Ingredient {
  constructor(name, quantity, unit) {
    this.name = name;
    this.quantity = quantity;
    this.unit = unit;
  }

  getName() {
    // shouldn't we just pluralize the unit?

    // if (!isSingular(this.name) && this.quantity === 1) {
    //   return singular(this.name);
    // } else if (isSingular(this.name) && this.quantity !== 1) {
    //   return pluralize(this.name);
    // }
    return this.name;
  }

  getUnit() {
    if (!isSingular(this.unit) && this.isSingleQuantity(this.quantity)) {
      return singular(this.unit);
    } else if (isSingular(this.unit) && !this.isSingleQuantity(this.quantity)) {
      return pluralize(this.unit);
    }
    return this.unit;
  }

  getQuantity() {
    return Fractionalize(this.quantity);
  }

  isSingleQuantity(quantity) {
    if (quantity <= 1 && quantity > 0) {
      return true;
    }
    return false;
  }
}

module.exports = Ingredient;