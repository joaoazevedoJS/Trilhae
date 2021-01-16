import React, { ButtonHTMLAttributes, FC } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ ...rest }) => (
  <Container {...rest}>BTN</Container>
);

export default Button;
