/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
import { produce } from "immer";
import { CoffeeCartTypes } from "./actions";

export interface Coffee {
  idCoffee: number;
  counter: number;
  price: number;
}

interface CoffeeCartState {
  coffeeCart: Coffee[];
}

export function coffeeReducer(state: CoffeeCartState, action: any) {
  switch (action.type) {
    case CoffeeCartTypes.ADD_COFFEE_CART:
      const currentCoffeeIndex = state.coffeeCart.findIndex((coffee) => {
        return coffee.idCoffee === action.payload.newCoffeeCard.idCoffee;
      });

      if (currentCoffeeIndex < 0) {
        return produce(state, (draft) => {
          draft.coffeeCart.push(action.payload.newCoffeeCard);
        });
      } else {
        return produce(state, (draft) => {
          draft.coffeeCart[currentCoffeeIndex].counter +=
            action.payload.newCoffeeCard.counter;
        });
      }

    case CoffeeCartTypes.PLUS_COUNTER_COFFEE_CART:
      const currentCoffeeIndex2 = state.coffeeCart.findIndex((coffee) => {
        return coffee.idCoffee === action.payload.idCoffee;
      });

      if (currentCoffeeIndex2 < 0) return state;

      return produce(state, (draft) => {
        draft.coffeeCart[currentCoffeeIndex2].counter += 1;
      });

    case CoffeeCartTypes.MINUS_COUNTER_COFFEE_CART:
      const currentCoffeeIndex3 = state.coffeeCart.findIndex((coffee) => {
        return coffee.idCoffee === action.payload.idCoffee;
      });

      if (currentCoffeeIndex3 < 0) return state;

      return produce(state, (draft) => {
        const total = draft.coffeeCart[currentCoffeeIndex3].counter - 1;

        if (total == 0) {
          draft.coffeeCart = draft.coffeeCart.filter(
            (item) => item.idCoffee !== action.payload.idCoffee
          );
        } else {
          draft.coffeeCart[currentCoffeeIndex3].counter = total;
        }
      });

    case CoffeeCartTypes.REMOVE_COFFEE_CART:
      return produce(state, (draft) => {
        draft.coffeeCart = draft.coffeeCart.filter(
          (item) => item.idCoffee !== action.payload.idCoffee
        );
      });

    default:
      return state;
  }
}
