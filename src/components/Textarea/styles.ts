import styled from 'styled-components';

interface ContainerProps {
  isErrored?: boolean;
}

export const Container = styled.textarea<ContainerProps>`
  width: 100%;
  min-height: 150px;

  padding: 12px;
  box-shadow: 1px 0px 8px #00000016;
  border-radius: 10px;

  margin-bottom: 24px;
  border: none;
  resize: vertical;
`;
