import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5.75rem auto;
`;

export const OrderTitulo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    color: ${(props) => props.theme.color["yellow-dark"]};
    ${mixins.fonts.titleL}
  }

  p {
    color: ${(props) => props.theme.color["base-subtitle"]};
    ${mixins.fonts.textL}
  }
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.75rem auto;
  width: 100%;

  img {
    width: 30.75rem;
    height: 18.3125rem;
  }
`;

export const OrderInfo = styled.div`
  width: 60%;
  margin: 2.5rem auto;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.color.yellow},
        ${(props) => props.theme.color.purple}
      )
      border-box;
  border: 1px solid transparent;
  border-top-right-radius: 3rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 0.5rem;

  gap: 2rem;
`;

const LABEL_ICON_COLOR = {
  yellow: "yellow",
  yellowDark: "yellow-dark",
  purple: "purple",
} as const;

interface LabelColorIconProp {
  iconColor: keyof typeof LABEL_ICON_COLOR;
}

export const OrderInfoDetail = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconColor",
})<LabelColorIconProp>`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2rem;
    width: 2rem;
    background: ${(props) =>
      props.theme.color[LABEL_ICON_COLOR[props.iconColor]]};
    border: 1px solid;
    border-radius: 50%;

    svg {
      color: ${(props) => props.theme.color.white};
    }
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100% p {
      ${mixins.fonts.textM}
    }
  }
`;
