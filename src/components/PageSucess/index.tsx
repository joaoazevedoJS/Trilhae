import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

import Header from '../Header';

import { Container, Background } from './styles';

const PageSucess: FC = ({ children }) => {
  return (
    <>
      <Container>
        <Header goBackHome />

        {children}

        <Link to="/">Voltar para Página Inicial</Link>

        <Background />
      </Container>

      <Footer />
    </>
  );
};

export default PageSucess;
