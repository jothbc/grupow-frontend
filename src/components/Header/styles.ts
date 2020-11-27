import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  height: 80px;
  background: #28262e;
`;

export const Logo = styled.img`
  height: 60px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    label {
      input {
        display: none;
      }
      img {
        height: 56px;
        border-radius: 50%;
      }
    }
    div {
      display: block;
      margin-left: 16px;
      span {
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #f4ede8;
        display: block;
        & + span {
          font-weight: 500;
          color: #ff9000;
        }
      }
    }
  }
  svg {
    margin-left: 80px;
  }
`;
