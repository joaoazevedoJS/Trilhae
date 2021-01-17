import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;

  width: 100vw;
  height: 100vh;
  padding: 20px;

  position: fixed;
  top: 0;

  z-index: 999;

  div.content {
    background: #fff;
    padding: 24px;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 430px;
    margin: 0 auto;

    img {
      width: 100px;
    }

    h3 {
      font-size: 32px;
      color: var(--color-blue-primary);
      margin: 24px 0;
    }

    p {
      line-height: 24px;
      text-align: center;
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000016;

  z-index: -1;
`;
