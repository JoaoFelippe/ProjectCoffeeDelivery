import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.5rem;

      min-width: 2rem;
      height: 2rem;

      border-radius: 4px;
      text-decoration: none;
    }

    a:first-child {
      background: ${(props) => props.theme.color["purple-light"]};
      color: ${(props) => props.theme.color["base-subtitle"]};

      svg {
        color: ${(props) => props.theme.color["purple"]};
      }
    }

    a:last-child {
      background: ${(props) => props.theme.color["yellow-light"]};

      svg {
        color: ${(props) => props.theme.color["yellow-dark"]};
      }

      span {
        background: ${(props) => props.theme.color["yellow-dark"]};
        color: ${(props) => props.theme.color.white};
        ${mixins.fonts.textXS}

        border-radius: 50%;

        margin-top: -30px;
        margin-left: 30px;
        width: 20px;
        height: 20px;
        position: absolute;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
