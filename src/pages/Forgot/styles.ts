import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/images/background-signin.png';

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 90px);

  div.form-container {
    width: 100%;
    position: relative;
  }

  form {
    display: flex;
    flex-direction: column;

    grid-area: form;
    padding: 32px 24px;
    box-shadow: 1px 0px 8px #00000016;
    border-radius: 8px;
    background: #fff;

    h1 {
      text-align: center;
      font-weight: 700;
      padding-bottom: 16px;
      margin-bottom: 32px;
      border-bottom: 1px solid #00000016;
    }

    a {
      align-self: flex-end;
      text-decoration: none;
      color: var(--color-blue-primary);
    }

    a:hover {
      color: ${shade(0.4, '#00AAD4')};
    }

    a.signup {
      align-self: center;
    }

    button {
      width: 100%;
      margin: 24px 0;
    }
  }

  @media (max-width: 750px) {
    margin-top: 96px;
  }

  @media (min-width: 750px) {
    div.form-container {
      display: grid;
      align-items: center;
      grid-template-columns: 200px 1fr;
      grid-template-areas: 'bg form';
    }

    form {
      width: 70%;
      justify-self: flex-end;
    }
  }
`;

export const Background = styled.div`
  margin-right: -20px;
  height: 250px;
  background: url(${background}) no-repeat right;
  background-size: 300px;
  z-index: -1;
  grid-area: bg;

  @media (min-width: 450px) {
    background: url(${background}) no-repeat right;
    height: 300px;
    background-size: 300px;
  }

  @media (min-width: 750px) {
    margin: 0;
    margin-left: 20px;

    position: absolute;
    left: 0;
    width: 500px !important;
    height: 400px;
    background-size: 500px;
  }
`;
