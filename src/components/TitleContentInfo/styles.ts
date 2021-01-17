import styled, { css } from 'styled-components';

interface Props {
  big?: boolean;
}

export const Container = styled.div<Props>`
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

    ${props =>
      props.big &&
      css`
        top: 25px;
        width: 250px;
      `}
  }

  h3 {
    z-index: 1;
    font-weight: 900;
    font-size: 20px;
    color: var(--color-black-primary);
    text-align: center;
    margin-bottom: 32px;

    ${props =>
      props.big &&
      css`
        font-size: 36px;
        line-height: 46px;
        text-transform: uppercase;
      `}
  }

  p {
    line-height: 26px;
  }

  p + p {
    margin-top: 16px;
  }
`;
