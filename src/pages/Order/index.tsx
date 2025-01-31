import {
  OrderContainer,
  OrderInfo,
  OrderInfoContainer,
  OrderInfoDetail,
  OrderTitulo,
} from "./styled";
import ImagemEntrega from "../../assets/Illustration.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { useParams } from "react-router-dom";

export function Order() {
  const { orderCart } = useContext(CoffeeContext);

  const idOrder = useParams().idOrder;

  const order = orderCart.filter((item) => item.id === idOrder);

  if (order.length < 0) return <></>;

  const formaPagamento = (): string => {
    switch (order[0].pagamento) {
      case "cartaoCredito":
        return "Cartão de Crédito";
      case "cartaoDebito":
        return "Cartao de Debito";
      case "dinheiro":
        return "Dinheiro";
      default:
        return "";
    }
  };

  return (
    <OrderContainer>
      <OrderTitulo>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </OrderTitulo>
      <OrderInfoContainer>
        <OrderInfo>
          <OrderInfoDetail iconColor="purple">
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <div>
              <p>
                Entrega em{" "}
                <b>
                  {" "}
                  {order[0].logradouro}, {order[0].numero}
                </b>
              </p>
              <p>
                {order[0].bairro} - {order[0].cidade}, {order[0].uf}
              </p>
            </div>
          </OrderInfoDetail>
          <OrderInfoDetail iconColor="yellow">
            <span>
              <Timer weight="fill" size={16} />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>20 min - 30 min </p>
            </div>
          </OrderInfoDetail>
          <OrderInfoDetail iconColor="yellowDark">
            <span>
              <CurrencyDollar weight="fill" size={16} />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p>{formaPagamento()}</p>
            </div>
          </OrderInfoDetail>
        </OrderInfo>
        <img src={ImagemEntrega} />
      </OrderInfoContainer>
    </OrderContainer>
  );
}
