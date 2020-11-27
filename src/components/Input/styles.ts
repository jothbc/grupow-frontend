import styled, { css } from 'styled-components';

interface InputProps {
  isErrored?: boolean;
}

export const Container = styled.div<InputProps>`
  width: 100%;

  background: #232129;
  border-radius: 4px;
  padding: 8px 18px;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #cc0000;
    `}
  svg {
    margin-right: 16px;
    color: #666360;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: #f4ede8;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    ::placeholder {
      color: #666360;
    }
  }
  & + div {
    margin-top: 8px;
  }
`;
