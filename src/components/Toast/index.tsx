import React from 'react';
import { FiX } from 'react-icons/fi';

import { Container } from './styles';

interface ToastProps {
  close(): void;
}

const Toast: React.FC<ToastProps> = ({ children, close }) => {
  return (
    <Container>
      {children}
      <FiX onClick={() => close()} />
    </Container>
  );
};

export default Toast;
