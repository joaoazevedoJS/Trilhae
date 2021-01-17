import styled from 'styled-components';

export const Container = styled.header`
  height: 32px;
  width: 100%;

  box-shadow: 0px 0px 8px #00000016;
  background: var(--color-white-primary);
  padding: 32px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1140px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  img,
  button {
    height: 32px;
  }

  button:first-child {
    border: none;
    background: 0;
  }

  button:first-child:hover img {
    opacity: 0.8;
  }
`;
