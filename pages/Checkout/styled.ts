import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 5.75rem auto;
  gap: 2rem;
`;

export const CheckoutAddress = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

const LABEL_ICON_COLOR = {
  yellow: "yellow-dark",
  purple: "purple",
} as const;

interface LabelColorIconProp {
  iconColor: keyof typeof LABEL_ICON_COLOR;
}

export const LabelCheckout = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconColor",
})<LabelColorIconProp>`
  display: flex;
  flex-direction: row;

  gap: 0.5rem;

  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.color[LABEL_ICON_COLOR[props.iconColor]]};
  }

  h3 {
    color: ${(props) => props.theme.color["base-subtitle"]};
    ${mixins.fonts.textM}
  }

  p {
    color: ${(props) => props.theme.color["base-text"]};
    ${mixins.fonts.textS}
  }
`;

export const CoffeeCardCheckout = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.color["base-card"]};

  padding: 2.5rem;
`;

export const CheckoutCoffee = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

export const CheckoutCoffeeDetails = styled(CoffeeCardCheckout)`
  border-radius: 0 45px 0 45px;
  gap: 1.5rem;
`;

export const CheckoutCoffeePay = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.25rem 0;

    color: ${(props) => props.theme.color["base-text"]};

    p {
      ${mixins.fonts.textS}
    }

    span {
      ${mixins.fonts.textM}
    }

    &:last-child {
      background: red;
      p {
        ${mixins.fonts.textL}
      }
    }
  }

  button {
    background: ${(props) => props.theme.color["yellow"]};
    color: ${(props) => props.theme.color["white"]};

    margin-top: 1.5rem;

    height: 2.625rem;
    border: none;
    border-radius: 8px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

// 

// export const LabelCheckbox = styled.label`
//   padding: 11px;
//   border: none;
//   background: ${(props) => props.theme.color["base-button"]};
//   border-radius: 4px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   width: 100%;
//   position: relative;

//   &:focus {
//     border: 1px solid ${(props) => props.theme.color["yellow-dark"]};
//   }

//   input {
//     display: none;
//   }

//   input:checked + & {
//     border: 1px solid ${(props) => props.theme.color["yellow-dark"]};
//     background: ${(props) => props.theme.color["yellow-light"]};
//   }

//   span {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     ${mixins.fonts.buttonM}
//   }
// `;
