import styled from "styled-components";

const TextArea = styled.textarea`
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
  transition: background-color var(--animation-duration) linear,
    border-color var(--animation-duration) linear,
    color var(--animation-duration) linear,
    box-shadow var(--animation-duration) linear,
    transform var(--animation-duration) ease;

  -webkit-appearance: none;
  display: block;
  margin-right: 0;
  box-sizing: border-box;
  resize: vertical;

  &:not([cols]) {
    width: 100%;
  }

  &:not([rows]) {
    min-height: 40px;
    height: 140px;
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--focus);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export { TextArea };
