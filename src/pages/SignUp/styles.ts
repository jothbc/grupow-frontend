import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';
import BackgroundImg from '../../assets/useeabuse.jpg';

const animRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(30px);
  }to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Section = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 50%;
  }
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 305px;
    margin: 0 24px;

    animation: ${animRight} 300ms ease-in-out forwards;

    h3 {
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      margin: 36px 0;
    }

    button {
      margin-top: 24px;
      width: 100%;
      background: #ff9000;
      border-radius: 4px;
      padding: 16px;
      border: none;

      font-weight: 500;
      font-size: 16px;
      color: #fefefe;
      transition: 300ms;

      &:hover {
        background-color: ${shade(0.2, '#ff9000')};
      }
    }

    span {
      line-height: 21px;
      color: rgba(157, 157, 157, 0.59);
      margin-top: 20px;
      & + span {
        margin: 0;
        a {
          color: #ff9000;
          transition: 300ms;
          &:hover {
            color: ${shade(0.2, '#ff9000')};
          }
        }
      }
    }
  }
`;

export const Background = styled.div`
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
  flex: 1;
`;
