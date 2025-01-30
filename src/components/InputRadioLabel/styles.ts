import styled from "styled-components";
import { mixins } from "../../styles/mixins";

interface ColNumber {
  size: number;
}

export const Col = styled.div<ColNumber>`
  flex: ${(props) => (props.size ? `0 0 ${(props.size / 12) * 100}%` : "1")};
  max-width: ${(props) =>
    props.size ? `${(props.size / 12) * 100}%` : "100%"};
  &:not(:first-child) {
    padding-left: 0.75rem;
  }
`;

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

//   input:checked + &{
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

export const RadioInput = styled.input`
  display: none; /* Esconde o input */

  /* Quando o input estiver selecionado, estilize o label irmão */
  &:checked + label {
    border: 1px solid ${(props) => props.theme.color["yellow-dark"]};
    background: ${(props) => props.theme.color["yellow-light"]};
  }
`;

export const LabelCheckbox = styled.label`
  padding: 11px;
  border: 1px solid transparent; /* Borda transparente por padrão */
  background: ${(props) => props.theme.color["base-button"]};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  position: relative;

  /* Estilo quando o label está focado */
  &:focus-within {
    border: 1px solid ${(props) => props.theme.color["yellow-dark"]};
  }

  span {
    display: flex;
    align-items: center;
    gap: 1rem;
    ${mixins.fonts.buttonM}
    width: 100%;

  }
`;
