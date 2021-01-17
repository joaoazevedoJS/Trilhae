import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;

  margin-top: 80px;

  padding: 32px 20px 0 20px;
  position: relative;

  div.courses {
    display: grid;
    row-gap: 32px;
    column-gap: 32px;
  }

  @media (min-width: 700px) {
    div.courses {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 980px) {
    div.courses {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const CardCourse = styled.div`
  padding: 24px;
  width: 100%;
  box-shadow: 0px 0px 8px #00000026;
  border-radius: 20px;

  img {
    width: 100%;
    border-radius: 20px;
  }

  h3 {
    font-size: 20px;
    line-height: 30px;
    color: var(--color-blue-primary);
    text-align: center;

    border-bottom: 1px solid var(--color-blue-primary);
    margin: 24px 0px;
    padding-bottom: 16px;
  }

  p {
    line-height: 24px;
  }

  button {
    margin-top: 24px;
    height: 36px;
    width: 100%;
  }
`;