import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/images/background-page-sucess.png';

import FooterPG from '../../components/Footer';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: calc(100vh - 64px);
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  margin-top: 60px;

  padding: 32px 20px 0 20px;
  position: relative;

  div {
    margin-top: 0;
  }

  h3 {
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 8px;
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
    display: grid;
    grid-template-columns: 1fr 300px;
    align-items: center;
    margin-top: 0;

    div.page-content {
      width: 400px;
    }

    p {
      font-size: 16px;
      line-height: 26px;
    }
  }
`;

export const Background = styled.div`
  height: 400px;
  margin-right: -20px;
  background: url(${background}) no-repeat center;
  background-size: 400px;

  @media (min-width: 550px) {
    background-size: 400px;
  }

  @media (min-width: 870px) {
    background: url(${background}) no-repeat right;
    background-size: 400px;
    width: 100%;
    position: absolute;
    right: 0;
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

export const Footer = styled(FooterPG)`
  position: absolute;
  bottom: 0;
  left: 0;
`;
