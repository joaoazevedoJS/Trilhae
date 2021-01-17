import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/images/background-page-sucess.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;

  padding: 32px 20px 0 20px;
  position: relative;

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

  a {
    align-self: center;
    text-decoration: none;
    color: var(--color-blue-primary);
  }

  a:hover {
    color: ${shade(0.4, '#00AAD4')};
  }

  button.btn-signup {
    height: 36px;
    width: 180px;
    margin-bottom: 24px;
    align-self: center;
  }
`;

export const Background = styled.div`
  margin-bottom: -32px;
  height: 100%;
  margin-right: -20px;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;
