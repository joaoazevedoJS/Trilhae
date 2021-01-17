import styled from 'styled-components';

interface ContainerProps {
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #00000016;
  border-radius: 4px;

  input {
    width: 100%;
    height: 100%;
    border: none;
  }

  margin-bottom: 24px;
`;
