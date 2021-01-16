import React, { ButtonHTMLAttributes, FC } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgHover?: string;
  uppercase?: boolean;
  transparent?: boolean;
}

const Button: FC<ButtonProps> = ({
  bgHover,
  uppercase,
  transparent,
  children,
  ...rest
}) => (
  <Container
    uppercase={uppercase}
    transparent={transparent}
    bgHover={bgHover}
    {...rest}
  >
    {children}
  </Container>
);

export default Button;
