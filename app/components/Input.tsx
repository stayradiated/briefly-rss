import styled from "styled-components";

const Input = styled.input`
  display: block;
  color: var(--form-text);
  background-color: var(--background);
  font-family: inherit;
  font-size: inherit;
  margin-right: 6px;
  margin-bottom: 6px;
  padding: 10px;
  border: none;
  border-radius: 6px;
  outline: none;

  vertical-align: top;
  -webkit-appearance: none;

  transition:
    background-color var(--animation-duration) linear,
    border-color var(--animation-duration) linear,
    color var(--animation-duration) linear,
    box-shadow var(--animation-duration) linear,
    transform var(--animation-duration) ease;

  &:focus {
    box-shadow: 0 0 0 2px var(--focus);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ::placeholder {
    color: var(--form-placeholder);
   }
}
`;

export { Input };
