import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;

  position: relative;

  padding-top: 80px;

  div.points {
    margin-bottom: 80px;
  }

  footer {
    position: absolute;
    bottom: 0;
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

  div.points {
    display: grid;
    row-gap: 32px;
    column-gap: 32px;
  }

  @media (min-width: 700px) {
    div.points {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 980px) {
    div.points {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const CardAward = styled.div`
  cursor: pointer;

  display: grid;
  grid-template-columns: 100px 1fr;
  column-gap: 16px;

  padding: 16px;
  width: 100%;
  box-shadow: 0px 0px 8px #00000026;
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  h3 {
    font-size: 16px;
    line-height: 26px;
    color: var(--color-blue-primary);
    text-align: center;

    border-bottom: 1px solid var(--color-blue-primary);
    margin: 8px 0px;
    padding-bottom: 8px;
  }

  p {
    line-height: 24px;
  }

  button {
    margin-top: 8px;
    height: 36px;
    width: 100%;
  }
`;
