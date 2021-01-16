import styled from 'styled-components';

import backgroundImg1 from '../../assets/images/background-1.png';
import backgroundImg2 from '../../assets/images/background-2.png';

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  padding: 32px 20px;
  margin-bottom: 40px;
  position: relative;

  @media (min-width: 540px) {
    margin-bottom: 0px;
    padding-bottom: 0px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    margin-left: -20px;

    box-shadow: 0px 0px 8px #00000016;
    background: var(--color-white-primary);
    padding: 32px 20px;
    position: fixed;
    top: 0;
    z-index: 99;

    img,
    button {
      height: 32px;
    }
  }

  main {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: calc(100vh - 128px);
    color: var(--color-black-primary);

    h1 {
      font-size: 18px;
      line-height: 28px;
      text-align: center;

      margin-bottom: 24px;
    }

    p {
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      margin-bottom: 64px;
    }

    @media (min-width: 540px) {
      flex-direction: row;
      align-items: center;
      min-height: 350px;

      div {
        width: 350px;
      }

      div:first-child {
        z-index: 11;
      }

      p {
        margin-bottom: 16px;
      }
    }

    @media (min-width: 900px) {
      min-height: 700px;

      div {
        width: 450px;
      }

      h1 {
        font-size: 24px;
        line-height: 34px;
      }

      p {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }

  section {
    margin-top: 32px;

    @media (min-width: 900px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 32px;

      div.lastContent {
        margin-top: -200px;
      }
    }
  }

  form {
    button {
      width: 100%;
    }

    div.textarea {
      position: relative;
    }

    @media (min-width: 650px) {
      div.textarea {
        position: relative;

        textarea {
          width: 60%;
        }

        display: flex;
      }

      button {
        width: 60%;
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var(--color-blue-primary);
    width: calc(100% + 40px);
    margin-left: -20px;

    padding: 16px;
    margin-top: 32px;

    div,
    div p {
      display: flex;
      align-items: center;
    }

    div p {
      color: var(--color-white-primary);
      margin-right: 8px;
      text-transform: uppercase;
    }

    svg {
      margin-right: 8px;
      fill: var(--color-blue-primary);
      color: var(--color-white-primary);
      background: #fff;
      border-radius: 50%;
      padding: 4px;
      font-size: 24px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  margin-left: -20px;
  width: calc(100% + 40px);
  background: url(${backgroundImg1}) no-repeat center;
  background-size: cover;

  @media (min-width: 540px) {
    background-size: 450px;

    position: absolute;
    right: 0;

    width: 450px !important;
    height: 350px;

    margin-left: 0;
    z-index: 1;
  }

  @media (min-width: 900px) {
    background-size: 800px !important;
    background: url(${backgroundImg1}) no-repeat right;

    width: 100% !important;
    height: 100%;
  }
`;

export const FooterBackground = styled.div`
  flex: 1;
  height: 300px;
  background: url(${backgroundImg2}) no-repeat right;
  background-size: 350px;

  position: absolute;
  right: 0;

  width: 100% !important;

  margin-right: -20px;
  z-index: -1;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const ButtonContainerFixed = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--color-white-primary);
  padding: 16px;
  z-index: 99;
  box-shadow: 0px 0px 8px #00000016;

  display: flex;
  place-content: center;

  @media (min-width: 540px) {
    position: unset;
    box-shadow: none;
    background: transparent;
  }
`;
