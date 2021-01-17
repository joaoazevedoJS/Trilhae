import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';

import { Page, Background, Container } from './styles';

const Signup: FC = () => {
  const history = useHistory();

  const handleNavigateToSignin = useCallback(() => {
    history.push('/signin');
  }, [history]);

  const handleSubmit = useCallback(
    data => {
      console.log(data);

      history.push('/sucess/signup');
    },
    [history],
  );

  return (
    <Page>
      <Container>
        <Header goBackHome>
          <Button blue onClick={handleNavigateToSignin} transparent uppercase>
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
    </Page>
  );
};

export default Signup;
