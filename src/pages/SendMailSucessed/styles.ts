import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/images/background-page-sucess.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;

  padding: 32px 20px 0 20px;

  div {
    margin-top: 0;
  }

  h3 {
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 8px;
  }

  h3 + h3 {
    margin-bottom: 24px;
  }

  p {
    text-align: center;
  }

  div.page-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: var(--color-blue-primary);
  }

  a:hover {
    color: ${shade(0.4, '#00AAD4')};
  }

  div.page-content button {
    height: 36px;
    width: 180px;
    margin-bottom: 24px;
  }

  @media (min-width: 870px) {
    display: flex;

    div.page-content {
      width: 530px;
    }

    p {
      font-size: 16px;
      line-height: 26px;
    }
  }
`;

export const Background = styled.div`
  margin-top: 40px;
  height: 350px;
  margin-right: -20px;
  background: url(${background}) no-repeat center;
  background-size: cover;

  @media (min-width: 550px) {
    background-size: 400px;
  }

  @media (min-width: 870px) {
    background: url(${background}) no-repeat right;
    background-size: 400px;
    width: 100%;
    height: 100%;

    position: absolute;
    right: 0px;
    z-index: -1;
    margin-right: 0px;
  }

  @media (min-width: 870px) {
    background-size: 500px;
  }

  @media (min-width: 950px) {
    background-size: 550px;
  }
`;
