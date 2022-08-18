import styled from "styled-components";

const Button = styled.button`
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
  cursor: pointer;

  transition: background-color var(--animation-duration) linear,
    border-color var(--animation-duration) linear,
    color var(--animation-duration) linear,
    box-shadow var(--animation-duration) linear,
    transform var(--animation-duration) ease;

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export { Button };
