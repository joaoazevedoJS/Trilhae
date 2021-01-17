import React, { FC, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Background, Container, Footer } from './styles';

const Signin: FC = () => {
  const history = useHistory();

  const handleNavigateToSignin = useCallback(() => {
    history.push('/signup');
  }, [history]);

  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <>
      <Container>
        <Header goBackHome>
          <Button onClick={handleNavigateToSignin} transparent uppercase>
            Cadastra-se
          </Button>
        </Header>

        <div className="form-container">
          <Form onSubmit={handleSubmit}>
            <h1>Entrar</h1>

            <Input name="email" placeholder="E-mail: " />
            <Input name="password" placeholder="Crie uma senha:" />

            <Link to="forgot">Esqueci a Senha</Link>

            <Button uppercase>Entrar</Button>
          </Form>

          <Background />
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Signin;
