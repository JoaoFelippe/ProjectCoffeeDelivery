import {
  Coffee,
  Package,
  ShoppingCart,
  Timer
} from "phosphor-react";
import ImagemBackground from "../../assets/Imagem-CoffeDelivery.svg";
import {
  HomeCoffeeList,
  HomeContainer,
  HomeIntro,
  HomeItemIcon,
  HomeItens,
  HomeTitle
} from "./styles";
import { useContext } from "react";


import { CoffeeCard } from "./components/CoffeCard";
import { CoffeeContext } from "../../context/CoffeeContext";




export function Home() {
  const {coffeeShop, cart} = useContext(CoffeeContext);

  

  console.log(cart)


  return (
    <HomeContainer>
      <HomeIntro>
        <HomeTitle>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </HomeTitle>
        <img src={ImagemBackground} />
      </HomeIntro>
      <HomeItens>
        <div>
          <HomeItemIcon iconcolor="yellowDark">
            <span>
              <ShoppingCart size={15} weight="fill" />
            </span>
            Compra simples e segura
          </HomeItemIcon>
          <HomeItemIcon iconcolor="yellow">
            <span>
              <Timer size={15} weight="fill" />
            </span>
            Entrega rápida e rastreada
          </HomeItemIcon>
        </div>
        <div>
          <HomeItemIcon iconcolor="brown">
            <span>
              <Package size={15} weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </HomeItemIcon>
          <HomeItemIcon iconcolor="purple">
            <span>
              <Coffee size={15} weight="fill" />
            </span>
            O café chega fresquinho até você
          </HomeItemIcon>
        </div>
      </HomeItens>
      <HomeCoffeeList>
        <h2>Nossos cafés</h2>
        <div>
          {coffeeShop.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
              />
            );
          })}
        </div>
      </HomeCoffeeList>
    </HomeContainer>
  );
}
