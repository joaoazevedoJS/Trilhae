import React, { FC, useCallback, HtmlHTMLAttributes } from 'react';

import { useHistory } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.png';
import HomeIcon from '../../assets/icons/home.svg';

import { Container } from './styles';

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  goBackHome?: boolean;
}

const Header: FC<Props> = ({ goBackHome, children, ...rest }) => {
  const history = useHistory();

  const handleNavigationToHome = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container {...rest}>
      <div className="content">
        <button
          className="header-btn"
          type="button"
          onClick={handleNavigationToHome}
        >
          <img src={LogoImg} alt="Trilhaê" />
        </button>

        <div>
          {children}

          {goBackHome && (
            <button
              className="header-btn"
              type="button"
              onClick={handleNavigationToHome}
            >
              <img src={HomeIcon} alt="Home" />
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;
