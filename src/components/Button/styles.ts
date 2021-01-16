import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  bgHover?: string;
  uppercase?: boolean;
  transparent?: boolean;
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 8px 20px;
  font-weight: bold;
  border-radius: 8px;
  border: 2px solid var(--color-green-primary);
  background: var(--color-green-primary);
  color: var(--color-white-primary);
  transition: background-color 0.4s, color 0.4s;

  &:hover {
    background: ${shade(0.2, '#0ADE34')};
  }

  ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${props =>
    props.transparent &&
    css`
      color: var(--color-green-primary);
      background: var(--color-white-primary);

      &:hover {
        background: var(--color-green-primary);
        color: var(--color-white-primary);
      }
    `}

  ${props =>
    props.bgHover &&
    css`
      border-color: ${props.bgHover};

      &:hover {
        background: ${shade(0.2, props.bgHover)};
      }
    `}
`;
