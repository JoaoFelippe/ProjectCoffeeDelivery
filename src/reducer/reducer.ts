/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
import { produce } from "immer";
import { CoffeeCartTypes } from "./actions";
import { NewOrderFormData } from "../pages/Checkout";

export interface Coffee {
  idCoffee: number;
  counter: number;
  price: number;
}

export interface Order extends NewOrderFormData {
  id: string;
  coffee: Coffee[];
}

interface CoffeeCartState {
  coffeeCart: Coffee[];
  orderCart: Order[];
}

export function coffeeReducer(state: CoffeeCartState, action: any) {
  switch (action.type) {
    case CoffeeCartTypes.ADD_COFFEE_CART:
      const currentCoffeeIndexAdd = state.coffeeCart.findIndex((coffee) => {
        return coffee.idCoffee === action.payload.newCoffeeCard.idCoffee;
      });

      if (currentCoffeeIndexAdd < 0) {
        return produce(state, (draft) => {
          draft.coffeeCart.push(action.payload.newCoffeeCard);
        });
      } else {
        return produce(state, (draft) => {
          draft.coffeeCart[currentCoffeeIndexAdd].counter +=
            action.payload.newCoffeeCard.counter;
        });
      }

    case CoffeeCartTypes.PLUS_COUNTER_COFFEE_CART:
      const currentCoffeeIndexPlus = state.coffeeCart.findIndex((coffee) => {
        return coffee.idCoffee === action.payload.idCoffee;
      });

      if (currentCoffeeIndexPlus < 0) return state;

      return produce(state, (draft) => {
        draft.coffeeCart[currentCoffeeIndexPlus].counter += 1;
      });

    case CoffeeCartTypes.MINUS_COUNTER_COFFEE_CART:
      const currentCoffeeIndexMinus = state.coffeeCart.findIndex((coffee) => {
        return coffee.idCoffee === action.payload.idCoffee;
      });

      if (currentCoffeeIndexMinus < 0) return state;

      return produce(state, (draft) => {
        const total = draft.coffeeCart[currentCoffeeIndexMinus].counter - 1;

        if (total == 0) {
          draft.coffeeCart = draft.coffeeCart.filter(
            (item) => item.idCoffee !== action.payload.idCoffee
          );
        } else {
          draft.coffeeCart[currentCoffeeIndexMinus].counter = total;
        }
      });

    case CoffeeCartTypes.REMOVE_COFFEE_CART:
      return produce(state, (draft) => {
        draft.coffeeCart = draft.coffeeCart.filter(
          (item) => item.idCoffee !== action.payload.idCoffee
        );
      });

    case CoffeeCartTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        // const newOrder: Order = {
        //   id: String(new Date().getTime()),
        //   coffee: state.coffeeCart,
        //   ...action.payload.data,
        // };

        draft.coffeeCart = [];
        draft.orderCart.push(action.payload.data);
      });

    default:
      return state;
  }
}
