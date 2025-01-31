import { createContext, ReactNode, useEffect, useReducer } from "react";

import ExpressoAmericano from "../assets/Expresso-Americano.svg";
import ExpressoCremoso from "../assets/Expresso-Cremoso.svg";
import ExpressoGeleado from "../assets/Expresso-Gelado.svg";
import ExpressoTradicional from "../assets/Expresso-Tradicional.svg";

import CafeLeite from "../assets/Cafe-Leite.svg";
import Capuccino from "../assets/Capuccino.svg";
import Latte from "../assets/Latte.svg";
import Macchiato from "../assets/Macchiato.svg";

import ChocolateQuente from "../assets/Chocotale-Quente.svg";
import Cubano from "../assets/Cubano.svg";
import Havaiano from "../assets/Havaiano.svg";
import Mocaccino from "../assets/Mocaccino.svg";

import Arabe from "../assets/Arabe.svg";
import Irlandes from "../assets/Irlandes.svg";
import { Coffee, coffeeReducer, Order } from "../reducer/reducer";
import {
  AddCoffeeCartAction,
  CheckoutCartAction,
  MinusCofferCartAction,
  PlusCoffeeCartAction,
  RemoveCofferCartAction,
} from "../reducer/actions";
import { useNavigate } from "react-router-dom";
import { NewOrderFormData } from "../pages/Checkout";

export interface CoffeeCard {
  id: number;
  imagem: string;
  titulo: string;
  descricao: string;
  tags: string[];
}

interface CoffeeContextType {
  coffeeShop: CoffeeCard[];
  coffeeCart: Coffee[];
  orderCart: Order[];
  AddCoffeeCart: (cart: Coffee) => void;
  PlusCoffeeCart: (idCoffee: number) => void;
  MinusCoffeeCart: (idCoffee: number) => void;
  RemoveCoffeeCart: (idCoffee: number) => void;
  CheckoutCart: (data: NewOrderFormData) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeCartState, dispatch] = useReducer(
    coffeeReducer,
    {
      coffeeCart: [],
      orderCart: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem("@coffee-delivery:1.0.0");

      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON);

      return initialState;
    }
  );

  const navigate = useNavigate();

  const coffeeShop: CoffeeCard[] = [
    {
      imagem: ExpressoTradicional,
      titulo: "Expresso Tradicional",
      descricao: "O tradicional café feito com água quente e grãos moídos",
      tags: ["TRADICIONAL"],
      id: 1,
    },
    {
      imagem: ExpressoAmericano,
      titulo: "Expresso Americano",
      descricao: "Expresso diluído, menos intenso que o tradicional",
      tags: ["TRADICIONAL"],
      id: 2,
    },
    {
      imagem: ExpressoCremoso,
      titulo: "Expresso Cremoso",
      descricao: "Café expresso tradicional com espuma cremosa",
      tags: ["TRADICIONAL"],
      id: 3,
    },
    {
      imagem: ExpressoGeleado,
      titulo: "Expresso Gelado",
      descricao: "Bebida preparada com café expresso e cubos de gelo",
      tags: ["TRADICIONAL", "GELADO"],
      id: 4,
    },
    {
      imagem: CafeLeite,
      titulo: "Café com Leite",
      descricao: "Meio a meio de expresso tradicional com leite vaporizado",
      tags: ["TRADICIONAL", "COM LEITE"],
      id: 5,
    },
    {
      imagem: Latte,
      titulo: "Latte",
      descricao:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      tags: ["TRADICIONAL", "COM LEITE"],
      id: 6,
    },
    {
      imagem: Capuccino,
      titulo: "Capuccino",
      descricao:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      tags: ["TRADICIONAL", "COM LEITE"],
      id: 7,
    },
    {
      imagem: Macchiato,
      titulo: "Macchiato",
      descricao:
        "Café expresso misturado com um pouco de leite quente e espuma",
      tags: ["TRADICIONAL", "COM LEITE"],
      id: 8,
    },
    {
      imagem: Mocaccino,
      titulo: "Mocaccino",
      descricao: "Café expresso com calda de chocolate, pouco leite e espuma",
      tags: ["TRADICIONAL", "COM LEITE"],
      id: 9,
    },
    {
      imagem: ChocolateQuente,
      titulo: "Chocolate Quente",
      descricao: "Bebida feita com chocolate dissolvido no leite quente e café",
      tags: ["ESPECIAL", "COM LEITE"],
      id: 10,
    },
    {
      imagem: Cubano,
      titulo: "Cubano",
      descricao:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
      id: 11,
    },
    {
      imagem: Havaiano,
      titulo: "Havaiano",
      descricao: "Bebida adocicada preparada com café e leite de coco",
      tags: ["ESPECIAL"],
      id: 12,
    },
    {
      imagem: Arabe,
      titulo: "Árabe",
      descricao: "Bebida preparada com grãos de café árabe e especiarias",
      tags: ["ESPECIAL"],
      id: 13,
    },
    {
      imagem: Irlandes,
      titulo: "Irlandês",
      descricao: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      tags: ["ESPECIAL", "ALCOÓLICO"],
      id: 14,
    },
  ];

  const { coffeeCart, orderCart } = coffeeCartState;

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeCartState);

    localStorage.setItem("@coffee-delivery:1.0.0", stateJSON);
  }, [coffeeCartState]);

  function AddCoffeeCart(cartItem: Coffee) {
    dispatch(AddCoffeeCartAction(cartItem));
  }

  function PlusCoffeeCart(idCoffee: number) {
    dispatch(PlusCoffeeCartAction(idCoffee));
  }

  function MinusCoffeeCart(idCoffee: number) {
    dispatch(MinusCofferCartAction(idCoffee));
  }

  function RemoveCoffeeCart(idCoffee: number) {
    dispatch(RemoveCofferCartAction(idCoffee));
  }

  function CheckoutCart(data: NewOrderFormData) {
    const newOrder: Order = {
      id: String(new Date().getTime()),
      coffee: coffeeCart,
      ...data,
    };
    dispatch(CheckoutCartAction(newOrder));
    navigate(`/Order/${newOrder.id}`);
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeShop,
        coffeeCart,
        orderCart,
        AddCoffeeCart,
        PlusCoffeeCart,
        MinusCoffeeCart,
        RemoveCoffeeCart,
        CheckoutCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
