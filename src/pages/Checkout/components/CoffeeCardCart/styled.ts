import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CoffeeCart = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.color["base-title"]};
    font-weight: 700;

    width: 20%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

export const CofferCartLogo = styled.div`
  display: flex;
  gap: 1.25rem;
  width: 80%;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const CoffeeCartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const CoffeeCartCountRemove = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  gap: 0.5rem;
  align-items: center;

  a {
    background: ${(props) => props.theme.color["base-button"]};
    color: ${(props) => props.theme.color["purple-dark"]};
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }
`;

export const CoffeeCartCount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: ${(props) => props.theme.color["base-title"]};
  background: ${(props) => props.theme.color["base-button"]};

  border: 1px solid ${(props) => props.theme.color["base-button"]};
  border-radius: 5px;

  button {
    background: ${(props) => props.theme.color["base-button"]};
    color: ${(props) => props.theme.color["purple-dark"]};
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.color["base-title"]};
  }
`;
