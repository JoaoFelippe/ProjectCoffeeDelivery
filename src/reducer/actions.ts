import { Coffee, Order } from "./reducer";

export enum CoffeeCartTypes {
  ADD_COFFEE_CART = "ADD_COFFEE_CART",
  PLUS_COUNTER_COFFEE_CART = "PLUS_COUNTER_COFFEE_CART",
  MINUS_COUNTER_COFFEE_CART = "MINUS_COUNTER_COFFEE_CART",
  REMOVE_COFFEE_CART = "REMOVE_COFFEE_CART",
  CHECKOUT_CART = "CHECKOUT_CART",
}

export function AddCoffeeCartAction(newCoffeeCard: Coffee) {
  return {
    type: CoffeeCartTypes.ADD_COFFEE_CART,
    payload: {
      newCoffeeCard,
    },
  };
}

export function PlusCoffeeCartAction(idCoffee: number) {
  return {
    type: CoffeeCartTypes.PLUS_COUNTER_COFFEE_CART,
    payload: {
      idCoffee,
    },
  };
}

export function MinusCofferCartAction(idCoffee: number) {
  return {
    type: CoffeeCartTypes.MINUS_COUNTER_COFFEE_CART,
    payload: {
      idCoffee,
    },
  };
}

export function RemoveCofferCartAction(idCoffee: number) {
  return {
    type: CoffeeCartTypes.REMOVE_COFFEE_CART,
    payload: {
      idCoffee,
    },
  };
}

export function CheckoutCartAction(
  data: Order
  //callback: NavigateFunction
) {
  return {
    type: CoffeeCartTypes.CHECKOUT_CART,
    payload: {
      data,
      //callback,
    },
  };
}
