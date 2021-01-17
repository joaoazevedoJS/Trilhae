import styled from 'styled-components';

import background from '../../../assets/images/background-helcome.png';

import FooterPG from '../../../components/Footer';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;

  margin-top: 80px;

  padding: 32px 20px 0 20px;
  position: relative;

  div.tilte-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
    }
  }

  @media (min-width: 780px) {
    height: calc(100vh - 100px);
    margin-top: 0px;
    padding: 0px 20px;

    display: grid;
    grid-template-columns: 400px 1fr;
  }

  @media (min-width: 880px) {
    grid-template-columns: 500px 1fr;
  }
`;

export const Background = styled.div`
  margin-top: 64px;
  margin-bottom: -90px;
  width: 100%;
  height: 300px;
  background: url(${background}) no-repeat center;
  background-size: 310px;

  @media (min-width: 780px) {
    background: url(${background}) no-repeat right;
    background-size: 500px;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
`;

export const Footer = styled(FooterPG)`
  @media (min-width: 780px) {
    position: absolute;
    bottom: 0;
  }
`;
