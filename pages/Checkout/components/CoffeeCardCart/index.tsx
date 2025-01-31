import {
  CoffeeCart,
  CoffeeCartContent,
  CoffeeCartCount,
  CoffeeCartCountRemove,
  CofferCartLogo,
} from "./styled";

import { CoffeeContext, type Cart } from "../../../../context/CoffeeContext";
import { useContext } from "react";
import { Minus, Plus, Trash } from "phosphor-react";

export function CoffeeCardCart({ idCoffee, counter, price }: Cart) {
  const { coffeeShop, PlusCoffeeCart, MinusCoffeeCart, RemoveCoffeeCart } =
    useContext(CoffeeContext);

  const coffee = coffeeShop.filter((coffee) => {
    if (coffee.id === idCoffee) return coffee;
  });

  const total = price * counter;
  const totalFormatado = total.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });

  function handlePlusCoffee() {
    PlusCoffeeCart(idCoffee);
  }

  function handleMinusCounter() {
    MinusCoffeeCart(idCoffee);
  }

  function handleRemoveCoffee(){
    RemoveCoffeeCart(idCoffee)
  }

  return (
    <CoffeeCart>
      <CofferCartLogo>
        <img src={coffee[0].imagem} />
        <CoffeeCartContent>
          <h4>{coffee[0].titulo}</h4>
          <CoffeeCartCountRemove>
            <CoffeeCartCount>
              <button type="button" onClick={handleMinusCounter}>
                <Minus size={15} weight="bold" />
              </button>
              <span>{counter}</span>
              <button type="button" onClick={handlePlusCoffee}>
                <Plus size={15} weight="bold" />
              </button>
            </CoffeeCartCount>

            <a onClick={handleRemoveCoffee}>
              <Trash size={15} /> Remover
            </a>
          </CoffeeCartCountRemove>
        </CoffeeCartContent>
      </CofferCartLogo>

      <span>R$ {totalFormatado}</span>
    </CoffeeCart>
  );
}
