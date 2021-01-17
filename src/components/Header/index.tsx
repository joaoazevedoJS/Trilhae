import React, { FC, useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.png';

import { Container } from './styles';

const Header: FC = ({ children }) => {
  const history = useHistory();

  const handleNavigationToHome = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <div>
        <button type="button" onClick={handleNavigationToHome}>
          <img src={LogoImg} alt="Trilhaê" />
        </button>

        {children}
      </div>
    </Container>
  );
};

export default Header;
