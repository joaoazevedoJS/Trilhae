import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 32px 0;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 12px;
    width: 180px;
    height: 20px;
    background: var(--color-blue-secundary);
    transform: rotate(-0.5deg);
  }

  h3 {
    z-index: 1;
    font-weight: 900;
    font-size: 20px;
    color: var(--color-black-primary);
    text-align: center;
    margin-bottom: 32px;
  }

  p {
    line-height: 26px;
  }

  p + p {
    margin-top: 16px;
  }
`;
