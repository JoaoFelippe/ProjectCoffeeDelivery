import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

import LogoCoffee from "../../assets/Logo-CoffeDelivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";

export function Header() {
  const { cart } = useContext(CoffeeContext);

  const numberItensCart = cart.length;
  const enableSpan = numberItensCart > 0 ? true : false;

  return (
    <HeaderContainer>
      <img src={LogoCoffee} />

      <nav>
        <NavLink to="/">
          <MapPin size={15} weight="fill" /> Porto Alegre, RS
        </NavLink>
        <NavLink to="/">
          <ShoppingCart size={15} weight="fill" />
          {enableSpan && <span>{numberItensCart}</span>}
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
