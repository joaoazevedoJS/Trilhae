import styled from 'styled-components';
import { shade } from 'polished';

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

  div.content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1140px;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    a {
      align-self: flex-end;
      text-decoration: none;
      color: var(--color-blue-primary);
    }

    a:hover {
      color: ${shade(0.4, '#00AAD4')};
    }

    div {
      display: flex;
      align-items: center;

      button.header-btn {
        margin-left: 16px;
        height: 24px;
      }

      button.header-btn img {
        height: 100%;
      }
    }
  }

  img,
  button {
    height: 32px;
  }

  button.header-btn {
    border: none;
    background: 0;
  }

  div.linkto + div.linkto {
    margin-left: 16px;
  }

  @media (min-width: 380px) {
    div.child {
      margin-right: 24px;
    }

    div.linkto + div.linkto {
      margin-left: 24px;
    }
  }

  button.header-btn:hover img {
    opacity: 0.8;
  }
`;
