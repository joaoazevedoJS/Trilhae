import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.footer`
  display: flex;
  align-items: center;

  width: 100%;
  margin-top: 32px;
  height: 56px;
  background: var(--color-blue-primary);
  padding: 16px;

  div.content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1140px;
    width: 100%;
    margin: 0 auto;

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
      cursor: pointer;
      transition: background-color 0.4s;
    }

    svg:hover {
      background: ${shade(0.2, '#Fff')};
    }
  }
`;
