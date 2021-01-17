import styled from 'styled-components';

import background from '../../assets/images/background-signup.png';

export const Page = styled.div`
  min-height: 100vh;

  position: relative;

  footer {
    position: absolute;
    bottom: 0;
  }
`;

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  padding: 32px 20px 0 20px;
  position: relative;

  h1 {
    font-size: 16px;
    line-height: 26px;
    margin: 70px 0 32px 0;
    text-align: center;
  }

  div.form-container {
    position: relative;
  }

  form {
    padding: 32px 24px;
    box-shadow: 1px 0px 8px #00000016;
    border-radius: 8px;
    background: #fff;

    div.input-group {
      display: grid;
      column-gap: 16px;
      grid-template-columns: 1fr 100px;
    }

    button {
      width: 100%;
    }
  }

  @media (min-width: 750px) {
    h1 {
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 64px;
    }

    div.form-container {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 200px;
    }

    form {
      width: 70%;
    }
  }
`;

export const Background = styled.div`
  margin-top: 32px;
  margin-right: -20px;
  height: 350px;
  background: url(${background}) no-repeat left;
  background-size: cover;
  z-index: -1;

  @media (min-width: 450px) {
    background: url(${background}) no-repeat right;
    height: 300px;
    background-size: 300px;
  }

  @media (min-width: 750px) {
    position: absolute;
    right: 0;
    width: 100% !important;
    height: 400px;
    background-size: 500px;
  }
`;
