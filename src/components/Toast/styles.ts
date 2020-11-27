import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

const animToast = keyframes`
  from{
    opacity: 0;
    transform: translateX(10px);
  }to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 16px 24px;
  background: #cc0000;
  border-radius: 4px;
  animation: ${animToast} 500ms ease-in-out;
  display: flex;
  align-items: center;
  svg {
    margin-left: 16px;
    transition: 300ms;
    &:hover {
      color: ${shade(0.2, '#FFF')};
    }
  }
`;
