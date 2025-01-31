import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  CheckoutAddress,
  CheckoutCoffee,
  CheckoutCoffeeDetails,
  CheckoutCoffeePay,
  CheckoutContainer,
  CoffeeCardCheckout,
  LabelCheckout,
  Row,
} from "./styled";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { CoffeeCardCart } from "./components/CoffeeCardCart";

import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputBox } from "../../components/InputBox";
import { InputRadioLabel } from "../../components/InputRadioLabel";

const newOrderValidation = zod.object({
  cep: zod
    .string()
    .min(8, { message: "Informe o CEP" })
    .max(8, { message: "Informe o CEP" }),
  logradouro: zod
    .string()
    .min(1, { message: "O campo precisa ter no minimo 1 caracter" }),
  numero: zod.string().min(1, { message: "Informe o número" }),
  complemento: zod.string().optional(),
  bairro: zod
    .string()
    .min(1, { message: "O campo precisa ter no minimo 1 caracter" }),
  cidade: zod
    .string()
    .min(1, { message: "O campo precisa ter no minimo 1 caracter" }),
  uf: zod
    .string()
    .length(2, { message: "O campo precisa ter somente 2 caracteres" }),
  pagamento: zod.string({
    required_error: "Selecione um método de pagamento",
  }),
});

export type NewOrderFormData = zod.infer<typeof newOrderValidation>;

export function Checkout() {
  const { coffeeCart, CheckoutCart } = useContext(CoffeeContext);

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderValidation),
    defaultValues: {
      cep: "",
      logradouro: "",
      numero: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  });

  const { handleSubmit } = newOrderForm;

  function handleCreateNewOrder(data: NewOrderFormData) {
    if (coffeeCart.length == 0) {
      return alert("É preciso ter pelo menos um café no carrinho");
    }

    CheckoutCart(data);
  }

  const totalCart = coffeeCart.reduce(
    (total, item) => total + item.price * item.counter,
    0
  );
  const totalCartFormatado = totalCart.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });

  const frete = 3.5;
  const freteFormatado = frete.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });

  const totalCartFrete = totalCart + frete;
  const totalCartFreteFormatado = totalCartFrete.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });

  return (
    <form id="checkout-form" onSubmit={handleSubmit(handleCreateNewOrder)}>
      <FormProvider {...newOrderForm}>
        <CheckoutContainer>
          <CheckoutAddress>
            <h2>Complete seu pedido</h2>
            <CoffeeCardCheckout>
              <LabelCheckout iconColor="yellow">
                <MapPinLine size={15} />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </LabelCheckout>
              <div>
                <Row>
                  <InputBox
                    sizeBox={4}
                    id="cep"
                    type="text"
                    placeholder="CEP"
                    minLength={8}
                    maxLength={8}
                  />
                </Row>
                <Row>
                  <InputBox
                    sizeBox={12}
                    id="logradouro"
                    type="text"
                    placeholder="Rua"
                  />
                </Row>
                <Row>
                  <InputBox
                    sizeBox={4}
                    id="numero"
                    type="text"
                    placeholder="Número"
                  />
                  <InputBox
                    sizeBox={8}
                    inputOpt={true}
                    id="complemento"
                    type="text"
                    placeholder="Complemento (Opcional)"
                  />
                </Row>

                <Row>
                  <InputBox
                    sizeBox={4}
                    id="bairro"
                    type="text"
                    placeholder="Bairro"
                  />
                  <InputBox
                    sizeBox={6}
                    id="cidade"
                    type="text"
                    placeholder="Cidade"
                  />
                  <InputBox sizeBox={2} id="uf" type="text" placeholder="UF" />
                </Row>
              </div>
            </CoffeeCardCheckout>
            <CoffeeCardCheckout>
              <LabelCheckout iconColor="purple">
                <CurrencyDollar size={15} />
                <div>
                  <h3>Pagamento</h3>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </LabelCheckout>
              <div>
                <Row>
                  <InputRadioLabel
                    id="cartaoCredito"
                    value="cartaoCredito"
                    idRadio="pagamento"
                    sizeBox={4}
                    nameButton="CARTÃO DE CRÉDITO"
                    iconButton={<CreditCard size={15} />}
                  />
                  <InputRadioLabel
                    id="cartaoDebito"
                    value="cartaoDebito"
                    idRadio="pagamento"
                    sizeBox={4}
                    nameButton="CARTÃO DE DÉBITO"
                    iconButton={<Bank size={15} />}
                  />
                  <InputRadioLabel
                    id="dinheiro"
                    value="dinheiro"
                    idRadio="pagamento"
                    sizeBox={4}
                    nameButton="DINHEIRO"
                    iconButton={<Money size={15} />}
                  />
                </Row>
              </div>
            </CoffeeCardCheckout>
          </CheckoutAddress>
          <CheckoutCoffee>
            <h2>Cafés selecionados</h2>
            <CheckoutCoffeeDetails>
              {coffeeCart &&
                coffeeCart.map((coffee) => {
                  return (
                    <CoffeeCardCart
                      key={coffee.idCoffee}
                      idCoffee={coffee.idCoffee}
                      counter={coffee.counter}
                      price={coffee.price}
                    />
                  );
                })}
              <CheckoutCoffeePay>
                <div>
                  <p>Total de itens</p>
                  <span>R$ {totalCartFormatado}</span>
                </div>
                <div>
                  <p>Entrega</p>
                  <span>R$ {freteFormatado}</span>
                </div>
                <div>
                  <p>Total </p>
                  <span>R$ {totalCartFreteFormatado}</span>
                </div>
                <button type="submit" form="checkout-form">
                  CONFIRMAR
                </button>
              </CheckoutCoffeePay>
            </CheckoutCoffeeDetails>
          </CheckoutCoffee>
        </CheckoutContainer>
      </FormProvider>
    </form>
  );
}
