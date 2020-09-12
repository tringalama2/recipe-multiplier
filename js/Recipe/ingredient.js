
import { Fractionalize, FractionalizeOptions } from "fractionalize";
import pluralize, { singular, plural, isSingular } from "pluralize";

class Ingredient {
  constructor(name, quantity, unit) {
    this.name = name;
    this.baseQuantity = quantity;
    this.currentQuantity = quantity;
    this.unit = unit;

    this.opts = new FractionalizeOptions();
    this.opts.maxDenominator = 12;
    this.opts.tolerance = 0.05;
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
    if (!isSingular(this.unit) && this.isSingleQuantity(this.currentQuantity)) {
      return singular(this.unit);
    } else if (isSingular(this.unit) && !this.isSingleQuantity(this.currentQuantity)) {
      return pluralize(this.unit);
    }
    return this.unit;
  }

  getBaseQuantity() {
    return Fractionalize(this.baseQuantity, this.opts);
  }
  getCurrentQuantity() {
    return Fractionalize(this.currentQuantity, this.opts);
  }

  multiply(multiplier) {
    this.currentQuantity = multiplier * this.baseQuantity;
  }

  isSingleQuantity(quantity) {
    if (quantity <= 1 && quantity > 0) {
      return true;
    }
    return false;
  }
}

module.exports = Ingredient;