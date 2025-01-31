import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { HomeCoffeeCard, HomeTag } from "./styled";
import { CoffeeContext } from "../../../../context/CoffeeContext";
import type { CoffeeCard } from "../../../../context/CoffeeContext";

interface CoffeeProps {
  coffee: CoffeeCard;
}

export function CoffeeCardCatalog({ coffee }: CoffeeProps) {
  const [counterCoffee, setCounterCoffee] = useState(1);
  const { AddCoffeeCart } = useContext(CoffeeContext);

  function handleAddCounter() {
    setCounterCoffee((state) => {
      return state + 1;
    });
  }

  function handleMinusCounter() {
    if (counterCoffee > 1) {
      setCounterCoffee((state) => {
        return state - 1;
      });
    }
  }

  function handleAddCoffeeCart() {
    AddCoffeeCart({
      idCoffee: coffee.id,
      counter: counterCoffee,
      price: 9.9,
    });
    setCounterCoffee(1);
  }

  return (
    <HomeCoffeeCard>
      <img src={coffee.imagem} />
      <HomeTag>
        {coffee.tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </HomeTag>
      <h3>{coffee.titulo}</h3>
      <p>{coffee.descricao}</p>

      <footer>
        <p>
          R$ <span>9,90</span>
        </p>

        <div>
          <div>
            <button onClick={handleMinusCounter}>
              <Minus size={15} weight="bold" />
            </button>
            <span>{counterCoffee}</span>
            <button onClick={handleAddCounter}>
              <Plus size={15} weight="bold" />
            </button>
          </div>

          <a>
            <ShoppingCart
              size={20}
              weight="fill"
              onClick={handleAddCoffeeCart}
            />
          </a>
        </div>
      </footer>
    </HomeCoffeeCard>
  );
}
