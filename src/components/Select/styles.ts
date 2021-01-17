import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored?: boolean;
}

export const Container = styled.select<ContainerProps>`
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #00000016;
  border-radius: 4px;

  ${props =>
    props.isErrored &&
    css`
      border: 1px solid #c53030;
    `}

  background: transparent;
  margin-bottom: 24px;
`;
