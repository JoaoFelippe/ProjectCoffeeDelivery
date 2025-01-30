import styled from "styled-components";


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

export const Input = styled.input`
  padding: 10px;
  border: none;
  background: ${(props) => props.theme.color["base-button"]};
  border-radius: 4px;
  width: 100%;

  &:focus {
    border: 1px solid ${(props) => props.theme.color["yellow-dark"]};
  }
`;

export const OptionalInput = styled(Input)`
  opacity: 0.6;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;
