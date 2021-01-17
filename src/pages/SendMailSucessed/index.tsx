import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import TitleContentInfo from '../../components/TitleContentInfo';

import { Container, Background, Footer } from './styles';

const SendMailSucessed: FC = () => {
  return (
    <>
      <Container>
        <Header goBackHome />

        <div className="page-content">
          <h3>Sua mensagem foi</h3>

          <TitleContentInfo title="enviada com sucesso">
            <p>
              Agradecemos seu contato. Aguarde e fique de olho no seu e-mail que
              logo retornaremos.
            </p>
          </TitleContentInfo>

          <Link to="/">Voltar para Página Inicial</Link>
        </div>

        <Background />
      </Container>

      <Footer />
    </>
  );
};

export default SendMailSucessed;
