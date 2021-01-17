import styled from 'styled-components';

export const Page = styled.div`
  padding-top: 34px;

  position: relative;

  footer {
    position: absolute;
  }

  @media (min-width: 900px) {
    footer {
      margin-top: 0;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;

  padding: 32px 20px 0 20px;
  position: relative;

  div.class,
  div.class-content {
    button.btn-select {
      display: flex;
      place-content: center;
      align-items: center;

      margin-bottom: 16px;
      background: transparent;
      width: 100%;
      border: none;
      font-weight: 700;
      font-size: 16px;

      svg {
        font-size: 20px;
        margin-left: 16px;
      }

      svg.finished {
        fill: var(--color-green-primary);
      }
    }
  }

  div.class {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    padding: 20px;

    background: var(--color-blue-primary);
    width: calc(100% + 40px);
    height: 200px;

    h3 {
      color: var(--color-white-primary);
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 16px;
    }

    span {
      width: 70%;
      text-align: start;
    }

    button.btn-select {
      color: var(--color-white-primary);
    }
  }

  div.class-content {
    display: flex;
    flex-direction: column;

    padding: 24px 0;

    h3 {
      margin: 24px 0;
      font-size: 16px;
      line-height: 26px;
      font-weight: 700;
      text-align: center;
    }

    p {
      margin-bottom: 24px;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
    }

    button {
      align-self: center;
      width: 200px;
    }

    button.btn-select {
      font-size: 12px;
    }

    svg {
      margin-left: 0 !important;
      margin-right: 16px;
    }
  }

  @media (min-width: 590px) {
    div.class-content {
      h3 {
        font-size: 20px;
        line-height: 30px;
      }

      p {
        font-size: 16px;
        line-height: 26px;
      }

      button.btn-select {
        font-size: 16px;
      }

      button + button {
        margin-top: 16px;
      }
    }
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 300px 1fr;
    column-gap: 32px;
    min-height: calc(100vh - 90px);

    div.class {
      width: calc(100% + 20px);
      margin-left: -20px;
      height: 100%;
      padding-top: 64px;
    }
  }
`;
