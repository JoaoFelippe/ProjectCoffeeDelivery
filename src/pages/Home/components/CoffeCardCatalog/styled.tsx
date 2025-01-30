import { styled } from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const HomeCoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 17rem;
  height: 19.375rem;

  border-radius: 10px 30px 10px 30px;

  background: ${(props) => props.theme.color["base-card"]};
  gap: 0.5rem;

  padding: 0 20px;
  margin-bottom: 0.9375rem;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.4rem;
  }

  h3 {
    color: ${(props) => props.theme.color["base-subtitle"]};

    ${mixins.fonts.titleS}
  }

  p {
    color: ${(props) => props.theme.color["base-label"]};

    ${mixins.fonts.textS}

    text-align: center;
  }

  footer {
    display: flex;

    align-items: center;
    gap: 1.3rem;

    padding: 1.25rem 0;
    width: 100%;

    p {
      color: ${(props) => props.theme.color["base-text"]};
      border: none;
      ${mixins.fonts.textM}

      >span {
        font-weight: 800;
        font-size: 1.5rem;
      }
    }
    > div {
      display: flex;
      gap: 0.625rem;

      div {
        display: flex;
        align-items: center;
        gap: 5px;

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
      }

      a {
        background: ${(props) => props.theme.color["purple-dark"]};
        color: ${(props) => props.theme.color["base-card"]};
        border-radius: 5px;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.375rem;
        height: 2.375rem;
      }
    }
  }
`;

export const HomeTag = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  span {
    background: ${(props) => props.theme.color["yellow-light"]};
    color: ${(props) => props.theme.color["yellow-dark"]};

    padding: 0.375rem;
    border-radius: 17px;

    ${mixins.fonts.tag}
  }
`;
