import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isErrored?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  isErrored = false,
  icon: Icon,
  ...rest
}) => {
  return (
    <Container isErrored={isErrored}>
      {Icon && <Icon size={20} />}
      <input name={name} {...rest} />
    </Container>
  );
};

export default Input;
