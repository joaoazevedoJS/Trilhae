import React, { FC, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Background, Container } from './styles';
import Footer from '../../components/Footer';
import PageSucess from '../../components/PageSucess';
import TitleContentInfo from '../../components/TitleContentInfo';

const Signup: FC = () => {
  const history = useHistory();

  const [openModal, setOpenModal] = useState(false);

  const handleNavigateToSignin = useCallback(() => {
    history.push('/signin');
  }, [history]);

  const handleSubmit = useCallback(data => {
    console.log(data);

    setOpenModal(true);
  }, []);

  if (openModal) {
    return (
      <PageSucess>
        <TitleContentInfo title="Parabéns!">
          <h3>Você agora faz parte do Thrilhaê</h3>

          <p>
            Faça o login para começar sua jornada em busca do conhecimento.
            Complete os desafios dessa trilha e ganhe pontos que podem ser
            trocados por prêmios.
          </p>
        </TitleContentInfo>

        <Button className="btn-signup" uppercase>
          Começar
        </Button>
      </PageSucess>
    );
  }

  return (
    <>
      <Container>
        <Header goBackHome>
          <Button onClick={handleNavigateToSignin} transparent uppercase>
            Acessar conta
          </Button>
        </Header>

        <h1>
          Preencha o formulário para fazer parte e vamos juntos abrir novas
          trilhas para o seu futuro profissional.
        </h1>

        <div className="form-container">
          <Form onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome: " />
            <Input name="email" placeholder="E-mail: " />
            <Input name="cpf" placeholder="CPF: " />
            <Input name="phone" placeholder="Telefone: " />
            <Input name="school" placeholder="Escola que estuda: " />

            <div className="input-group">
              <Input name="city" placeholder="Cidadade:" />
              <Input name="uf" placeholder="Estado:" />
            </div>

            <Input name="password" placeholder="Crie uma senha:" />
            <Input name="confirmPassword" placeholder="Repita a senha:" />

            <Button uppercase>Enviar</Button>
          </Form>

          <Background />
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Signup;
