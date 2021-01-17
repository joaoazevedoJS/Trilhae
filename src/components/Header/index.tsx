import React, { FC, useCallback, HtmlHTMLAttributes } from 'react';

import { useHistory } from 'react-router-dom';

import { FiLogOut } from 'react-icons/fi';
import LogoImg from '../../assets/images/logo.png';
import HomeIcon from '../../assets/icons/home.svg';

import { Container } from './styles';
import { deleteToken, getToken } from '../../services/token';

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  goBackHome?: boolean;
}

const Header: FC<Props> = ({ goBackHome, children, ...rest }) => {
  const history = useHistory();
  const token = getToken();

  const handleNavigationToHome = useCallback(() => {
    history.push(token ? '/logged/courses' : '/');
  }, [token, history]);

  const handleLogout = useCallback(() => {
    deleteToken();

    history.push('/signin');
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
          <div className="child">{children}</div>

          {goBackHome && (
            <button
              className="header-btn"
              type="button"
              onClick={handleNavigationToHome}
            >
              <img src={HomeIcon} alt="Home" />
            </button>
          )}

          {token && (
            <button className="header-btn" type="button" onClick={handleLogout}>
              <FiLogOut />
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;
