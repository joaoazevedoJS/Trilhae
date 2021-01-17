import styled from 'styled-components';

import background from '../../assets/images/background-signup.png';

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 64px;
  overflow-x: hidden;

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
      grid-template-columns: 150px 1fr;
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
  margin-right: -100px;
  height: 350px;
  background: url(${background}) no-repeat right;
  background-size: 400px;
  z-index: -1;

  @media (min-width: 450px) {
    height: 300px;
    background-size: 300px;
  }

  @media (min-width: 750px) {
    position: absolute;
    right: 0;
    width: 100% !important;
    height: 400px;
    background-size: 500px;
    margin-right: 0px;
  }
`;
